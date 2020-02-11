<?php
/**
 * Plugin Name:       Display Exif Data
 * Plugin URI:        https://github.com/michealengland/display-exif-data
 * Description:       Display exif data hidden in images.
 * Version:           0.0.1
 * Author:            Mike England
 * Author URI:        https://twitter.com/mikelikethebike
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Requires at least: 5.1
 * Tested up to:      5.3.0
 * Text Domain:       ded
 * Domain Path:       /languages
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Enqueue files.
include_once( plugin_dir_path( __FILE__ ) . '/inc/enqueue-scripts.php' );
