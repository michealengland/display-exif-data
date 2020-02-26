/**
 * Internal dependencies
 */
import ExifData from './exif-data';
import ExifFields from  './exif-fields';

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
		if ( 'core/image' !== props.name ) {
			return <BlockEdit { ...props } />;
		}

		const {
			attributes: {
				exifDataToggle,
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
					{ exifDataToggle && id ? <ExifData { ...props } /> : '' }
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
		exifData,
		exifDataToggle
	} = attributes;

	// Return early if not image block or if exifData is false.
	if ( 'core/image' === block.name && exifDataToggle ) {
		return (
			<div className="exif-data-enabled">
				{ element }
				<ExifFields
					exifData={ exifData }
					allowedKeys={ Object.keys( exifData ) }
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
