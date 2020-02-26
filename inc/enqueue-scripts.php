<?php
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Enqueue block editor only JavaScript and Editor CSS
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function ded_blocks_editor_scripts() {

	$block_handler = '../build/index.js';
	$editor_style_handler = '../build/editor.css';

	if ( file_exists ( plugin_dir_path( __FILE__ ) . $blockPath ) ) {
		// Enqueue editor JS.
		wp_enqueue_script(
			'ded-blocks-js',
			plugins_url( $block_handler , __FILE__ ),
			[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
			filemtime( plugin_dir_path( __FILE__ ) . $blockPath )
		);
	}

	if ( file_exists ( plugin_dir_path( __FILE__ ) . $editor_style_handler ) ) {
		// Enqueue editor styles.
		wp_enqueue_style(
			'ded-editor-styles',
			plugins_url( $editor_style_handler, __FILE__ ),
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . $editor_style_handler )
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'ded_blocks_editor_scripts' );

/**
 * Enqueue Frontend Styles
 *
 * @author Mike England <mike.england@webdevstudios.com>
 */
function ded_register_block_styles() {

	$style_handler = '../build/style.css';

	// Bail if file not found.
	if ( ! file_exists ( plugin_dir_path( __FILE__ ) . $style_handler ) ) {
		return;
	}

	// Enqueue frontend styles.
	wp_enqueue_style(
		'ded-styles',
		plugins_url( $style_handler, __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . $style_handler )
	);
}
add_action( 'init', 'ded_register_block_styles' );