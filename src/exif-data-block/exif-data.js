/**
 * Internal dependencies
 */
import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import ExifFields from  './exif-fields';

const ExifData = ( { exifData, id } ) => {
	// Setup state.
	const [imageMetaData, setImageMetaData] = useState( {} );
	const [loadError, setLoadError] = useState(false);

	// If imageMetaData is empty OR
	if ( isEmpty( imageMetaData ) || exifData !== imageMetaData ) {
		const promise = apiFetch( {
			path: `/wp/v2/media/${ id }`,
			method: 'GET',
		} );

		// On success update image metadata state with object.
		const success = ( response ) => {
			if ( ! isEmpty( imageMetaData ) ) {
				return;
			}

			setImageMetaData( response );
		};

		// On failure log an error and update loadError state.
		const failure = ( errorResponse ) => {
			// Log error.
			console.error( 'Failed to retrieve exif data.', errorResponse );

			// Set state.
			setLoadError( true );
		};

		// Check if value succeeds or fails.
		promise.then( success, failure );
	}

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
		return (
			<ExifFields
				exifData={ imageMetaData.media_details.image_meta }
				allowedKeys={ Object.keys( imageMetaData.media_details.image_meta ) }
			/>
		);
	}
};

export default ExifData;