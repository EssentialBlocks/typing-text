<?php

/**
 * Plugin Name:     Typing Text
 * Description:     Make Your Website Interactive With Typing Text Animation
 * Version:         1.3.0
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     typing-text
 * Requires PHP:    7.4
 * Requires at least: 6.0
 * Tested up to:    7.1
 *
 * @package         typing-text
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';

/*
 * `EbStyleHandler` is a deliberately shared class name: the file guards itself
 * with `class_exists()`, so whichever plugin in the Essential Blocks family
 * loads first supplies the single instance and no fatal redeclaration occurs.
 * The class cannot be renamed here — lib/style-handler is a git submodule shared
 * with the sibling plugins, so a rename would have to land upstream.
 *
 * Reusing another plugin's copy is safe for this plugin's purposes: every
 * version emits the same artefacts Typing Text depends on — a per-post
 * `uploads/eb-style/eb-style-{ID}.min.css` enqueued under the handle
 * `eb-block-style-{ID}` — and generates it from each block's `blockMeta`
 * attribute generically, without a per-block allow-list. Essential Blocks core
 * does not define `EbStyleHandler` at all (it has its own namespaced
 * `EssentialBlocks\Modules\StyleHandler` writing the same filenames), so core
 * and this plugin do not redeclare each other either.
 *
 * What does differ between revisions is optional behaviour: the older revision
 * still shipped by some siblings lacks `enqueue_frontend_assets()`, the
 * `eb_generated_css_frontend_deps` filter and the breakpoint-change regeneration
 * hooks. None of that breaks Typing Text, but it is worth surfacing while
 * debugging rather than leaving as a silent behavioural difference.
 *
 * The file_exists() guard covers an uninitialised submodule checkout, which
 * would otherwise fatal here.
 */
if ( file_exists( __DIR__ . '/lib/style-handler/style-handler.php' ) ) {
    require_once __DIR__ . '/lib/style-handler/style-handler.php';

    if (
        defined( 'WP_DEBUG' ) && WP_DEBUG
        && class_exists( 'EbStyleHandler' )
        && ! method_exists( 'EbStyleHandler', 'enqueue_frontend_assets' )
    ) {
        error_log(
            'Typing Text: an older EbStyleHandler was already loaded by another plugin. '
            . 'Frontend CSS still generates, but breakpoint-change regeneration is unavailable.'
        );
    }
}

function create_block_typing_text_block_init() {

    if ( ! defined( 'TYPING_TEXT_BLOCKS_VERSION' ) ) {
        define( 'TYPING_TEXT_BLOCKS_VERSION', "1.3.0" );
    }
    if ( ! defined( 'TYPING_TEXT_BLOCKS_ADMIN_URL' ) ) {
        define( 'TYPING_TEXT_BLOCKS_ADMIN_URL', plugin_dir_url( __FILE__ ) );
    }
    if ( ! defined( 'TYPING_TEXT_BLOCKS_ADMIN_PATH' ) ) {
        define( 'TYPING_TEXT_BLOCKS_ADMIN_PATH', dirname( __FILE__ ) );
    }

    /*
     * Essential Blocks core already provides `essential-blocks/typing-text`.
     * Stand down completely rather than registering a second implementation.
     *
     * The check has to happen *before* any asset registration, not just before
     * register_block_type(). Registering the scripts and styles anyway is what
     * put this plugin's copies of the animation, editor-CSS and controls assets
     * into the same handle namespace as core's, where WordPress keeps only the
     * first registrant and silently discards the rest.
     *
     * Calling this here also pins the decision for `Typing_Text_Helper::enqueues()`,
     * which runs later on `admin_enqueue_scripts`.
     */
    if ( Typing_Text_Helper::is_standing_down() ) {
        return;
    }

    $script_asset_path = TYPING_TEXT_BLOCKS_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        // Build output missing (`npm run build` not run). Bail out instead of
        // throwing an uncaught Error, which would take the whole site down.
        return;
    }
    $index_js     = TYPING_TEXT_BLOCKS_ADMIN_URL . 'dist/index.js';
    $script_asset = require $script_asset_path;
    if ( ! is_array( $script_asset ) || ! isset( $script_asset['dependencies'] ) ) {
        return;
    }
    $all_dependencies = array_merge( $script_asset['dependencies'], [
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-block-editor',
        Typing_Text_Helper::CONTROLS_HANDLE,
        'typing-text-eb-animation'
    ] );

    wp_register_script(
        'typing-text-block-editor-js',
        $index_js,
        $all_dependencies,
        $script_asset['version']
    );

    // Was `essential-blocks-eb-animation`. Essential Blocks core registers that
    // handle for its own copy (includes/Core/Block.php), and so do the other
    // carved-out block plugins, so only one of the files ever loaded.
    $load_animation_js = TYPING_TEXT_BLOCKS_ADMIN_URL . 'assets/js/eb-animation-load.js';
    wp_register_script(
        'typing-text-eb-animation',
        $load_animation_js,
        [],
        TYPING_TEXT_BLOCKS_VERSION,
        true
    );

    // Was `essential-blocks-animation`, likewise owned by core.
    $animate_css = TYPING_TEXT_BLOCKS_ADMIN_URL . 'assets/css/animate.min.css';
    wp_register_style(
        'typing-text-animation',
        $animate_css,
        [],
        TYPING_TEXT_BLOCKS_VERSION
    );

    $style_css      = TYPING_TEXT_BLOCKS_ADMIN_URL . 'dist/style.css';
    $style_css_path = TYPING_TEXT_BLOCKS_ADMIN_PATH . '/dist/style.css';
    wp_register_style(
        'typing-text-block-frontend-style',
        $style_css,
        ["typing-text-animation"],
        file_exists( $style_css_path ) ? filemtime( $style_css_path ) : TYPING_TEXT_BLOCKS_VERSION
    );

    $typed_js = TYPING_TEXT_BLOCKS_ADMIN_URL . 'assets/js/typed.min.js';
    wp_register_script(
        'typig-text-blocks-typedjs',
        $typed_js,
        ["jquery"],
        TYPING_TEXT_BLOCKS_VERSION,
        true
    );

    $frontend_asset_path = TYPING_TEXT_BLOCKS_ADMIN_PATH . "/dist/frontend/index.asset.php";
    if ( ! file_exists( $frontend_asset_path ) ) {
        return;
    }
    $frontend_js_path = require $frontend_asset_path;
    if ( ! is_array( $frontend_js_path ) || ! isset( $frontend_js_path['dependencies'] ) ) {
        return;
    }
    $frontend_js = "dist/frontend/index.js";
    wp_register_script(
        'eb-typing-text-frontend',
        plugins_url( $frontend_js, __FILE__ ),
        array_merge( ["typig-text-blocks-typedjs", "jquery", "typing-text-eb-animation"], $frontend_js_path['dependencies'] ),
        $frontend_js_path['version'],
        true
    );

    // Own block name, not core's: this guards against registering
    // `typing-text/typing-text-block` twice, which WordPress rejects with a
    // _doing_it_wrong notice. The core-provides-it case is handled by the
    // stand-down above.
    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'typing-text/typing-text-block' ) ) {
        register_block_type(
            Typing_Text_Helper::get_block_register_path( 'typing-text/typing-text-block', TYPING_TEXT_BLOCKS_ADMIN_PATH ),
            [
                'editor_script' => 'typing-text-block-editor-js',
                'style'         => 'typing-text-block-frontend-style',
                'script'        => 'eb-typing-text-frontend'
            ]
        );
    }
}

add_action( 'init', 'create_block_typing_text_block_init', 99 );
