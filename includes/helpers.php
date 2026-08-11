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

    private static $instance;

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
     * Load fonts.
     *
     * @access public
     */
    public function enqueues()
    {
        global $pagenow;

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

            wp_register_script(
                "typing-text-blocks-controls-util",
                TYPING_TEXT_BLOCKS_ADMIN_URL . 'dist/modules.js',
                array_merge($controls_dependencies['dependencies'],['lodash']),
                $controls_dependencies['version'],
                true
            );

            wp_localize_script('typing-text-blocks-controls-util', 'EssentialBlocksLocalize', array(
                // Kept as a float for backward compatibility with existing JS consumers.
                // Prefer eb_wp_version_string: a release such as 7.10 float-casts down to 7.1.
                'eb_wp_version' => (float) get_bloginfo('version'),
                'eb_wp_version_string' => get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
                // The controls bundle builds its editor media queries straight from
                // this object (StyleComponent):
                //     @media all and (max-width: ${...responsiveBreakpoints?.tablet}px)
                // Essential Blocks supplies it; a standalone plugin has to supply it
                // too. Without it the queries render as `max-width: undefinedpx`,
                // which is invalid, so the browser drops the entire block — meaning
                // no tablet or mobile typography (or any responsive style) is applied.
                'responsiveBreakpoints' => self::get_responsive_breakpoints(),
                // ebConditionalRegisterBlockType() destructures this key. Only read
                // for `essential-blocks/*` blocks, but keep it an array so the
                // lookup can never hit undefined.
                'all_blocks' => array(),
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('typing-text-blocks-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('typing-text-blocks-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            wp_enqueue_style(
                'essential-blocks-editor-css',
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
