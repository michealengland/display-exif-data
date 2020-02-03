<?php
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Enqueue block editor only JavaScript and Editor CSS
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function ded_blocks_editor_scripts() {
	// Enqueue editor JS.
	wp_enqueue_script(
		'ded-blocks-js',
		plugins_url( '../build/index.js', __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( plugin_dir_path( __FILE__ ) . $blockPath )
	);

	// Enqueue editor styles.
	wp_enqueue_style(
		'ded-editor-styles',
		plugins_url( '../build/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . '../build/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'ded_blocks_editor_scripts' );

/**
 * Enqueue Frontend Styles
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function ded_register_block_styles() {
	// Enqueue frontend styles.
	wp_enqueue_style(
		'ded-styles',
		plugins_url( '../build/style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . '../build/style.css' )
	);
}
add_action( 'init', 'ded_register_block_styles' );