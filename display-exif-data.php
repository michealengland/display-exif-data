<?php
/**
 * Plugin Name:       Display Exif Data
 * Plugin URI:        https://github.com/michealengland/display-exif-data
 * Description:       Display exif data hidden in images.
 * Version:           0.1.0
 * Author:            Mike England
 * Author URI:        https://twitter.com/mikelikethebike
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Requires at least: 5.1
 * Tested up to:      5.4.2
 * Text Domain:       ded
 * Domain Path:       /languages
 *
 * @package WebDevStudios\DisplayExifData
 * @since 0.0.4
 */

namespace WebDevStudios\DisplayExifData;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Register the block with WordPress.
 *
 * @author WebDevStudios
 * @since 0.0.1
 */
function register_block() {

	// Define our assets.
	$editor_script   = 'build/index.js';
	$editor_style    = 'build/editor.css';
	$frontend_style  = 'build/style.css';
	$frontend_script = 'build/frontend.js';

	// Verify we have an editor script.
	if ( ! file_exists( plugin_dir_path( __FILE__ ) . $editor_script ) ) {
		wp_die( esc_html__( 'Whoops! You need to run `npm run build` for the WDS Block Starter first.', 'ded' ) );
	}

	// Autoload dependencies and version.
	$asset_file = require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// Register editor script.
	wp_register_script(
		'ded-editor-script',
		plugins_url( $editor_script, __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	// Register editor style.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $editor_style ) ) {
		wp_register_style(
			'ded-editor-style',
			plugins_url( $editor_style, __FILE__ ),
			[ 'wp-edit-blocks' ],
			filemtime( plugin_dir_path( __FILE__ ) . $editor_style )
		);
	}

	// Register frontend style.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $frontend_style ) ) {
		wp_register_style(
			'ded-style',
			plugins_url( $frontend_style, __FILE__ ),
			[],
			filemtime( plugin_dir_path( __FILE__ ) . $frontend_style )
		);
	}

	// Register block with WordPress.
	register_block_type( 'ded/exif-data', array(
		'editor_script' => 'ded-editor-script',
		'editor_style'  => 'ded-editor-style',
		'style'         => 'ded-style',
	) );

	// Register frontend script.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $frontend_script ) ) {
		wp_enqueue_script(
			'ded-frontend-script',
			plugins_url( $frontend_script, __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
	}

	// Local plugin settings to be available
	// as JS variable `dedOptions`.
	wp_localize_script(
		'ded-editor-script',
		'dedOptions',
		[ 'options' => get_option( 'ded_options' ) ]
	);
}
add_action( 'init', __NAMESPACE__ . '\register_block' );

// Enqueue files.
include_once( plugin_dir_path( __FILE__ ) . '/inc/settings.php' );
