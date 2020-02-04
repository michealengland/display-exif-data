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

const imgId = 422;

/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';

// GET
// apiFetch( { path: '/wp/v2/media/' } ).then( posts => {
// 	console.log( 'posts', posts );
// } );

// POST
const fetchImgMetaData = apiFetch( {
	path: `/wp/v2/media/${ imgId }`,
	method: 'POST',
	// data: { title: 'New Post Title' },
} ).then( ( res ) => {
	const getImgMetaData = res.media_details.image_meta;

	return getImgMetaData;
} );

// const promise1 = new Promise( function( resolve, reject ) {
// 	resolve('Success!');
// });

const ExifData = () => {
	const {
		aperture,
	} = fetchImgMetaData;

	console.log( fetchImgMetaData );

	return (
		<ul>
			<li>{ fetchImgMetaData.aperture }</li>
		</ul>
	);
};

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
		...attributes, // copy original attributes.
		// ...exifAttributes, // copy new attributes.
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
					<ExifData />
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
 * @param {Object} el
 * @param {Object} block data.
 * @param {Object} attributes from block.
 * @return {Object} updated element object.
 */
const modifySavedElement = ( el, block, attributes ) => {
	const {
		exifDataToggle,
	} = attributes;

	// Return early if not image block or if exifData is false.
	if ( ! 'core/image' === block.name || exifDataToggle === false ) {
		return el;
	}

	return el.props.className = exifDataToggle ? 'expecto-patronum' : '';
};

// Set new attributes.
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'gfd/add-code-attributes',
	insertNewImgAttributes
);

// Insert editor control.
wp.hooks.addFilter(
	'editor.BlockEdit',
	'core/code',
	withInspectorControls
);

// Modify the saved value.
wp.hooks.addFilter(
	'blocks.getSaveElement',
	'gfd/modify-code-save-settings',
	modifySavedElement
);
