/**
 * Internal dependencies
 */
import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import ExifFields from  './exif-fields';
import { fetchExifData, stripEmptyFields } from '../utils';

const ExifData = ( props ) => {
	const {
		attributes: {
			displayEmptyFieldsToggle,
			displayIconsToggle,
			id,
		},
		setAttributes,
	} = props;

	// Setup state.
	const [imageMetaData, setImageMetaData] = useState( {} );
	const [loadError, setLoadError] = useState(false);
	const [mediaId, setMediaId] = useState( id );

	useEffect(() => {
		// fetch if imageMetaData is empty.
		// fetch if id has changed.
		if ( isEmpty( imageMetaData ) || id !== mediaId ) {

			// Update mediaID state on ID change.
			if ( id !== mediaId ) {
				setMediaId( id );
			}

			// Get media data.
			const promise = fetchExifData(id);

			// Handle promise.
			promise.then(
				// On success update image metadata state with object.
				( response ) => {
					if ( ! isEmpty( imageMetaData ) && id === mediaId ) {
						return;
					}

					setImageMetaData( response );
				},
				// On failure log an error and update loadError state.
				( errorResponse ) => {
					// Log error.
					console.error( 'Failed to retrieve exif data.', errorResponse );

					// Set state.
					setLoadError( true );
				},
			);
		}
	}, [id]);

	if ( loadError ) {
		return (
			<ul>
				<li>{ 'Failed to retrieve exif data.' }</li>
			</ul>
		);
	} else if ( isEmpty( imageMetaData ) ) {
		return (
			<ul>
				<li>{ 'Loading Metadata...' }</li>
			</ul>
		);
	} else {
		// All fields.
		const metaFields = imageMetaData.media_details.image_meta;

		// Strip empty fields if toggled.
		const allowedKeys = true === displayEmptyFieldsToggle ? stripEmptyFields( metaFields ) : metaFields;

		// Set exifData object.
		setAttributes( { exifData: imageMetaData.media_details.image_meta } );

		return (
			<ExifFields
				displayIcon={ displayIconsToggle }
				exifData={ metaFields }
				allowedKeys={ Object.keys( allowedKeys ) }
			/>
		);
	}
};

export default ExifData;

ExifData.propTypes = {
	attributes: {
		displayEmptyFieldsToggle: PropTypes.bool,
		displayIconsToggle: PropTypes.bool,
		id: PropTypes.number.isRequired,
	}
};

ExifData.defaultProps = {
	displayEmptyFieldsToggle: false,
	displayIcon: false,
};