/**
 * Internal dependencies
 */
import ExifData from './exif-data';
import ExifFields from './exif-fields';

const {
	blockEditor: {
		InspectorControls,
	},
	components: {
		PanelBody,
		ToggleControl,
	},
	compose: {
		createHigherOrderComponent,
	},
	i18n: {
		__,
	},
} = wp;

/**
 * Insert new attributes into block.
 *
 * @param {Object} settings block settings.
 * @param {string} name block name.
 * @return {Object} settings with updated attributes.
 */
const insertNewImgAttributes = ( settings, name ) => {
	if ( 'core/image' !== name ) {
		return settings;
	}

	// Return updated settings object.
	return (
		{
			...settings,
			attributes: {
				...settings.attributes,
				exifDataToggle: {
					type: 'boolean',
					default: false,
				},
				displayIconsToggle: {
					type: 'boolean',
					default: true,
				},
				exifData: {
					type: 'object',
					default: {},
				},
				displayEmptyFieldsToggle: {
					type: 'boolean',
					default: true,
				},
			}
		}
	);
};

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		// return BlockEdit early if not core/image.
		if ( 'core/image' !== props.name ) {
			return <BlockEdit { ...props } />;
		}

		const {
			attributes: {
				displayEmptyFieldsToggle,
				displayIconsToggle,
				exifDataToggle,
				id,
			},
			setAttributes,
		} = props;

		const insertClassName = exifDataToggle ? 'exif-data-enabled' : '';

		const updateExifDataToggle = ( newValue ) => {
			setAttributes( { exifDataToggle: newValue } );
		};

		const updateDisplayIconsToggle = ( newValue ) => {
			setAttributes( { displayIconsToggle: newValue } );
		};

		const updateDisplayEmptyFieldsToggle = ( newValue ) => {
			setAttributes( { displayEmptyFieldsToggle: newValue } );
		};

		return (
			<>
				<div className={ insertClassName }>
					<BlockEdit { ...props } />
					{ exifDataToggle && id ? <ExifData { ...props } /> : '' }
				</div>
				<InspectorControls>
					<PanelBody
						title={ __( 'Exif Data Settings', 'ded' ) }
					>
						<ToggleControl
							label={ __( 'Display exif data', 'ded' ) }
							checked={ exifDataToggle }
							onChange={ updateExifDataToggle }
						/>
						{
							true === exifDataToggle &&
							<>
								<ToggleControl
									label={ __( 'Display icons', 'ded' ) }
									checked={ displayIconsToggle }
									onChange={ updateDisplayIconsToggle }
								/>
								<ToggleControl
									label={ __( 'Hide empty fields', 'ded' ) }
									checked={ displayEmptyFieldsToggle }
									onChange={ updateDisplayEmptyFieldsToggle }
								/>
							</>
						}
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withInspectorControl' );

/**
 * Modify the block save function.
 *
 * @param {Object} element block component.
 * @param {Object} block data.
 * @param {Object} attributes from block.
 * @return {Object} updated element object.
 */
const modifySavedElement = ( element, block, attributes ) => {
	const {
		displayIconsToggle,
		exifData,
		exifDataToggle,
	} = attributes;

	// Return early if not image block or if exifData is false.
	if ( 'core/image' === block.name && exifDataToggle ) {
		return (
			<div className="exif-data-enabled">
				{ element }
				<ExifFields
					allowedKeys={ Object.keys( exifData ) }
					displayIcon={ displayIconsToggle }
					exifData={ exifData }
				/>
			</div>
		);
	} else {
		return element;
	}
};

// Set new attributes.
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'core/image',
	insertNewImgAttributes
);

// Insert editor control.
wp.hooks.addFilter(
	'editor.BlockEdit',
	'core/image',
	withInspectorControls
);

// Modify the saved value.
wp.hooks.addFilter(
	'blocks.getSaveElement',
	'core/image',
	modifySavedElement
);
