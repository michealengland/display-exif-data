/**
 * Internal dependencies
 */
import ExifData from './exif-data';

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
	element: {
		Fragment,
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

	const {
		attributes,
	} = settings;

	// Update attributes.
	settings.attributes = {
		...attributes,
		exifDataToggle: {
			type: 'boolean',
			default: false,
		},
		exifData: {
			type: 'object',
			default: {},
		}
	};

	return settings;
};

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			attributes: {
				exifDataToggle,
				exifData,
				id,
			},
			setAttributes,
		} = props;

		const insertClassName = exifDataToggle ? 'exif-data-enabled' : '';

		const onToggleChange = ( newValue ) => {
			setAttributes( { exifDataToggle: newValue } );
		};

		return (
			<Fragment>
				<div className={ insertClassName }>
					<BlockEdit { ...props } />
					{ exifDataToggle && id ?
					<ExifData
						id={ id }
						exifData={ exifData }
					/>
					: '' }
				</div>
				<InspectorControls>
					<PanelBody
						title={ __( 'Enable Exif Data' ) }
					>
						<ToggleControl
							label={ __( 'Display exif data from image file.' ) }
							checked={ exifDataToggle }
							onChange={ onToggleChange }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withInspectorControl' );

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
