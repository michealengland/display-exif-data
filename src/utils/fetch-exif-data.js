import apiFetch from '@wordpress/api-fetch';

/**
 * Fetch media using ID from WP Rest API.
 *
 * @param {*} id
 * @returns {promise} fetch promise.
 */
export const fetchExifData = ( id ) => (
	apiFetch( {
		path: `/wp/v2/media/${ id }`,
		method: 'GET',
	} )
);
