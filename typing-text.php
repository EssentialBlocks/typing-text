<?php

/**
 * Plugin Name:     Typing Text
 * Description:     Make Your Website Interactive With Typing Text Animation
 * Version:         1.5.0
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     typing-text
 * Requires PHP:    7.4
 * Requires at least: 6.0
 * Tested up to:    7.0
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

// The style handler ships as a git submodule; an uninitialised checkout would fatal here.
if ( file_exists( __DIR__ . '/lib/style-handler/style-handler.php' ) ) {
    require_once __DIR__ . '/lib/style-handler/style-handler.php';
}

function create_block_typing_text_block_init() {

    if ( ! defined( 'TYPING_TEXT_BLOCKS_VERSION' ) ) {
        define( 'TYPING_TEXT_BLOCKS_VERSION', "1.5.0" );
    }
    if ( ! defined( 'TYPING_TEXT_BLOCKS_ADMIN_URL' ) ) {
        define( 'TYPING_TEXT_BLOCKS_ADMIN_URL', plugin_dir_url( __FILE__ ) );
    }
    if ( ! defined( 'TYPING_TEXT_BLOCKS_ADMIN_PATH' ) ) {
        define( 'TYPING_TEXT_BLOCKS_ADMIN_PATH', dirname( __FILE__ ) );
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
        'typing-text-blocks-controls-util',
        'essential-blocks-eb-animation'
    ] );

    wp_register_script(
        'typing-text-block-editor-js',
        $index_js,
        $all_dependencies,
        $script_asset['version']
    );

    $load_animation_js = TYPING_TEXT_BLOCKS_ADMIN_URL . 'assets/js/eb-animation-load.js';
    wp_register_script(
        'essential-blocks-eb-animation',
        $load_animation_js,
        [],
        TYPING_TEXT_BLOCKS_VERSION,
        true
    );

    $animate_css = TYPING_TEXT_BLOCKS_ADMIN_URL . 'assets/css/animate.min.css';
    wp_register_style(
        'essential-blocks-animation',
        $animate_css,
        [],
        TYPING_TEXT_BLOCKS_VERSION
    );

    $style_css      = TYPING_TEXT_BLOCKS_ADMIN_URL . 'dist/style.css';
    $style_css_path = TYPING_TEXT_BLOCKS_ADMIN_PATH . '/dist/style.css';
    wp_register_style(
        'typing-text-block-frontend-style',
        $style_css,
        ["essential-blocks-animation"],
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
        array_merge( ["typig-text-blocks-typedjs", "jquery", "essential-blocks-eb-animation"], $frontend_js_path['dependencies'] ),
        $frontend_js_path['version'],
        true
    );

    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/typing-text' ) ) {
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
