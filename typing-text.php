<?php
/**
 * Plugin Name:     Typing Text
 * Description:     Make Your Website Interactive With Typing Text Animation
 * Version:         1.1.2
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     typing-text
 *
 * @package         typing-text
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_typing_text_block_init()
{
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "typing-text/typing-text-block" block first.'
		);
	}
	$index_js = 'build/index.js';
	wp_register_script(
		'create-block-typing-text-block-editor',
		plugins_url($index_js, __FILE__),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
		),
		filemtime("$dir/$index_js")
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-typing-text-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-typing-text-block',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	$typed_js = 'assets/js/typed.min.js';
	wp_register_script(
		'essential-blocks-typedjs',
		plugins_url($typed_js, __FILE__),
		array("jquery"),
		true
	);

	$frontend_js_path = include_once dirname(__FILE__)."/build/frontend.asset.php";
	$frontend_js = "build/frontend.js";
	wp_register_script(
		'essential-blocks-typing-text-frontend',
		plugins_url($frontend_js, __FILE__),
		array_merge( array("essential-blocks-typedjs", "jquery"), $frontend_js_path['dependencies'] ),
		$frontend_js_path['version'],
		true
	);


	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/typing-text')) {
		register_block_type('typing-text/typing-text-block', array(
			'editor_script' => 'create-block-typing-text-block-editor',
			'editor_style' => 'create-block-typing-text-block-editor',
			'style' => 'create-block-typing-text-block',
			'script' => 'essential-blocks-typing-text-frontend'
		));
	}
}

add_action('init', 'create_block_typing_text_block_init');
