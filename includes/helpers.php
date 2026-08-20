<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Typing_Text_Helper
{
    /**
     * Asset handles.
     *
     * Typing Text ships a private copy of the shared `controls` bundle, pinned to
     * its own commit. Registering it under an `essential-blocks-*` handle made
     * WordPress silently drop whichever copy lost the first-registrant race, so
     * every handle this plugin owns is namespaced to `typing-text-*`.
     */
    const CONTROLS_HANDLE     = 'typing-text-blocks-controls-util';
    const EDITOR_STYLE_HANDLE = 'typing-text-editor-css';

    /**
     * Name of the block Essential Blocks core provides for the same feature.
     */
    const EB_BLOCK_NAME = 'essential-blocks/typing-text';

    private static $instance;

    /**
     * Cached stand-down decision. Resolved once, on `init` priority 99.
     *
     * @var bool|null
     */
    private static $stand_down = null;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Should this plugin step aside entirely?
     *
     * Essential Blocks core registers `essential-blocks/typing-text` on `init`
     * priority 10; this plugin registers on priority 99, so by the time the
     * question is first asked the answer is final.
     *
     * The result is cached because `enqueues()` runs later, on
     * `admin_enqueue_scripts`. Re-evaluating there could return a *different*
     * answer if another plugin registered the block in between, which would
     * leave the block registered but its editor bundle un-enqueued — a broken
     * editor. One decision, taken once, keeps both call sites in agreement.
     *
     * @return bool
     */
    public static function is_standing_down()
    {
        if (null === self::$stand_down) {
            self::$stand_down = WP_Block_Type_Registry::get_instance()->is_registered(self::EB_BLOCK_NAME);
        }

        return self::$stand_down;
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues()
    {
        global $pagenow;

        // Essential Blocks core owns the block on this site; it also ships the
        // controls bundle these assets duplicate. Registering them anyway is
        // what produced the duplicate-handle and duplicate-global conflicts.
        if (self::is_standing_down()) {
            return;
        }

        /**
         * Only for Admin Add/Edit Pages
         */
        $query_string = isset($_SERVER['QUERY_STRING']) ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING'])) : '';

        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && !empty($query_string) && strpos($query_string, 'gutenberg-edit-site') !== false)) {

            $controls_asset_path = TYPING_TEXT_BLOCKS_ADMIN_PATH . '/dist/modules.asset.php';
            if (!file_exists($controls_asset_path)) {
                return;
            }
            $controls_dependencies = require $controls_asset_path;
            if (!is_array($controls_dependencies) || !isset($controls_dependencies['dependencies'])) {
                return;
            }

            /*
             * `regenerator-runtime` is not in dist/modules.asset.php and has to be
             * added by hand.
             *
             * controls/.babelrc runs @babel/preset-env with no targets, so it lowers
             * to ES5 and rewrites the `await apiFetch({ path: '/wp/v2/font-families' })`
             * in typography-control-v2/fontPicker to regenerator calls.
             * @wordpress/dependency-extraction-webpack-plugin then externalises
             * `@babel/runtime/regenerator` to the global `regeneratorRuntime` under the
             * `wp-polyfill` handle, which is why the asset file lists `wp-polyfill` and
             * not `regenerator-runtime`.
             *
             * That mapping is stale: WordPress's `wp-polyfill` is core-js and carries no
             * `regeneratorRuntime` at all. The polyfill lives in its own registered
             * vendor handle, `regenerator-runtime`, which nothing in core depends on, so
             * it never loads unless asked for. The global was therefore undefined and the
             * bundle threw `Cannot read properties of undefined (reading 'mark')` the
             * moment the Font Picker mounted -- that is, the moment the Typography
             * popover was opened. The throw happens in a passive effect, so React handed
             * it to the block's inspector error boundary and blanked the whole sidebar.
             */
            wp_register_script(
                self::CONTROLS_HANDLE,
                TYPING_TEXT_BLOCKS_ADMIN_URL . 'dist/modules.js',
                array_merge(
                    $controls_dependencies['dependencies'],
                    ['lodash', 'regenerator-runtime']
                ),
                $controls_dependencies['version'],
                true
            );

            /**
             * `TypingTextLocalize`, not `EssentialBlocksLocalize`.
             *
             * `wp_localize_script()` emits a plain global `var`. Every plugin in
             * the Essential Blocks family emitted it under the same name, so the
             * last one printed silently replaced everyone else's data — and the
             * bundles read it lazily, at React render time, long after all the
             * `-js-extra` blocks have run. Writing to our own name is the only
             * way for this plugin to stop breaking the others.
             *
             * The build maps the bundle's free `EssentialBlocksLocalize` /
             * `eb_conditional_localize` references onto these names via
             * `config/localize.js` (see `config/modules.webpack.config.js`), so
             * every consumer inside dist/modules.js reads the object below and
             * nothing else. Keep the two in sync: `config/localize.js` is the
             * only reader of these variable names.
             */
            wp_localize_script(self::CONTROLS_HANDLE, 'TypingTextLocalize', array(
                // Kept as a float for backward compatibility with existing JS consumers.
                // Prefer eb_wp_version_string: a release such as 7.10 float-casts down to 7.1.
                'eb_wp_version'         => (float) get_bloginfo('version'),
                'eb_wp_version_string'  => get_bloginfo('version'),
                // supportPanel builds image paths off this. It only renders for
                // `essential-blocks/*` block names so it is unreachable here, but
                // an own-plugin URL beats `undefined` in a src attribute.
                'eb_plugins_url'        => TYPING_TEXT_BLOCKS_ADMIN_URL,
                'rest_rootURL'          => get_rest_url(),
                // helpers/apiFetch.js does `fetch(EssentialBlocksLocalize?.ajax_url)`.
                // No control reachable from config/entries.js calls it, but a real
                // URL fails cleanly where `undefined` throws.
                //
                // Deliberately no `admin_nonce`: that nonce belongs to Essential
                // Blocks' own AJAX actions, which this plugin does not implement
                // or verify. Omitting it makes any such call fail closed.
                'ajax_url'              => admin_url('admin-ajax.php'),
                // The controls bundle builds its editor media queries straight from
                // this object (StyleComponent):
                //     @media all and (max-width: ${...responsiveBreakpoints?.tablet}px)
                // Essential Blocks supplies it; a standalone plugin has to supply it
                // too. Without it the queries render as `max-width: undefinedpx`,
                // which is invalid, so the browser drops the entire block — meaning
                // no tablet or mobile typography (or any responsive style) is applied.
                'responsiveBreakpoints' => self::get_responsive_breakpoints(),
                // typography-control-v2 disables the Google font list on the exact
                // string "false". This plugin's font loader always emits Google
                // fonts on the frontend, so the editor must agree.
                'googleFont'            => 'true',
                // No Font Awesome is bundled here, and no pro build exists.
                'fontAwesome'           => 'false',
                'is_pro_active'         => 'false',
                // ebConditionalRegisterBlockType() destructures `all_blocks`, and
                // supportPanel indexes `all_blocks_default` without an optional
                // chain. Both must be present objects, never undefined.
                'all_blocks'            => (object) array(),
                'all_blocks_default'    => (object) array(),
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script(self::CONTROLS_HANDLE, 'TypingTextConditionalLocalize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script(self::CONTROLS_HANDLE, 'TypingTextConditionalLocalize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            // Was `essential-blocks-editor-css`. Essential Blocks core registers
            // that handle for its own dist/modules.css and hangs its global
            // styles off it with wp_add_inline_style(); squatting on it meant one
            // of the two stylesheets never loaded at all.
            wp_enqueue_style(
                self::EDITOR_STYLE_HANDLE,
                TYPING_TEXT_BLOCKS_ADMIN_URL . 'dist/modules.css',
                array(),
                $controls_dependencies['version'],
                'all'
            );
        }
    }
    /**
     * Responsive breakpoints handed to the editor controls.
     *
     * Defaults match the values the frontend style handler generates against
     * (lib/style-handler/style-handler.php: tablet 1024, mobile 767), so the
     * editor preview and the frontend stay in agreement. If Essential Blocks is
     * active and the user has customised its breakpoints, honour that instead.
     *
     * @return array{tablet:int,mobile:int}
     */
    public static function get_responsive_breakpoints()
    {
        $breakpoints = array(
            'tablet' => 1024,
            'mobile' => 767,
        );

        $eb_settings = get_option('eb_settings', array());
        if (empty($eb_settings['responsiveBreakpoints'])) {
            return $breakpoints;
        }

        $saved = $eb_settings['responsiveBreakpoints'];
        if (is_string($saved)) {
            $saved = json_decode($saved, true);
        }
        if (!is_array($saved)) {
            return $breakpoints;
        }

        // Validate before casting: absint() would turn a negative width into a
        // positive one, so -5 must be rejected outright rather than become 5.
        foreach (array('tablet', 'mobile') as $device) {
            if (isset($saved[$device]) && is_numeric($saved[$device]) && (int) $saved[$device] > 0) {
                $breakpoints[$device] = (int) $saved[$device];
            }
        }

        return $breakpoints;
    }

    /**
     * Path passed to register_block_type().
     *
     * The pre-5.8 fallback that returned $blockname was dropped when the declared
     * floor moved to WP 6.0; the directory form is supported across the whole range.
     * $blockname is retained in the signature so existing call sites keep working.
     */
    public static function get_block_register_path($blockname, $blockPath)
    {
        return $blockPath;
    }
}
Typing_Text_Helper::register();
