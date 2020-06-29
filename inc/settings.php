<?php
/**
 * Create Display Exif Data options page.
 *
 * Register settings section and settings field.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2020-03-29
 */
function ded_settings_init() {
	add_settings_section(
		'ded_section_developers',
		__( 'Field Display Settings', 'ded' ),
		'ded_section_allowed_fields_cb',
		'ded'
	);

	register_setting( 'ded', 'ded_options', 'ded_setting_fields_sanitize', );

	add_settings_field(
		'ded_field_aperture',
		__( 'Disable Exif Fields', 'ded' ),
		'ded_setting_fields_cb',
		'ded',
		'ded_section_developers',
		[
			'label_for'       => 'ded_field_aperture',
			'class'           => 'ded_row',
			'ded_custom_data' => 'custom',
		]
	);
}
add_action( 'admin_init', 'ded_settings_init' );

/**
 * Determine boolean value for checkbox options.
 *
 * @param mixed $ded_options fields.
 * @return $ded_options
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2020-03-29
 */
function ded_setting_fields_sanitize( $ded_options ) {
	$ded_options = array_map(
		// Check each option for 'on' for boolean.
		function( $check_box ) {
			return 'on' === $check_box ? true : false;
		}, $ded_options
	);

	return $ded_options;
}

/**
 * Section Heading.
 *
 * @param [type] $args field elements.
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2020-03-29
 */
function ded_section_allowed_fields_cb( $args ) {
	?>
	<p id="<?php echo esc_attr( $args['id'] ); ?>"><?php esc_html_e( 'Check all fields you wish to exclude from being displayed sitewide.', 'ded' ); ?></p>
	<?php
}

/**
 * Display UI.
 *
 * Changes value on to true or false.
 *
 * @param [type] $args field data.
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2020-03-29
 */
function ded_setting_fields_cb( $args ) {
	$options = get_option( 'ded_options' );

	// Field keys matched to media API fields.
	$fields = [
		'aperture',
		'camera',
		'caption',
		'created_timestamp',
		'credit',
		'copyright',
		'focal_length',
		'iso',
		'keywords',
		'orientation',
		'shutter_speed',
		'title',
	];

	// Output Allowed Fields.
	foreach ( $fields as $field ) {
		$field_label  = $field;
		$field_id     = $field;
		$field_option = $field;
		?>

		<div>
			<input
				type="checkbox"
				id="<?php echo esc_attr( $field_id ); ?>"
				name="ded_options[<?php echo esc_attr( $field ); ?>]"
				<?php checked( $options[ $field ] ?? false ); ?>
			>
			<label for="<?php echo esc_attr( $field_id ); ?>"><?php echo esc_attr( $field_label ); ?></label>
		</div>

		<?php
	}
}

/**
 * Registers Exif Data Settings Admin Page.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2020-03-29
 */
function ded_options_page() {
	add_menu_page(
		'Exif Data Settings',
		'Exif Data',
		'manage_options',
		'ded',
		'ded_options_page_html',
		'dashicons-camera'
	);
}
add_action( 'admin_menu', 'ded_options_page' );

/**
 * Render form in Exif Data Settings Admin Settings page.
 *
 * @return void
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2020-03-29
 */
function ded_options_page_html() {
	// check user capabilities.
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	// add error/update messages.
	if ( isset( $_GET['settings-updated'] ) ) {
		// add settings saved message with the class of "updated".
		add_settings_error(
			'ded_messages',
			'ded_message',
			__( 'Settings Saved', 'ded' ),
			'updated'
		);
	}

	settings_errors( 'ded_messages' );
	?>
	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		<form action="options.php" method="post">
			<?php
			settings_fields( 'ded' );
			do_settings_sections( 'ded' );
			submit_button( 'Update Settings' );
			?>
		</form>
	</div>
	<?php
}
