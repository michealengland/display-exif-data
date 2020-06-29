/**
 * Convert field keys to icon friendly strings.
 *
 * @param {string} key object key
 * @param {Object} fields object
 * @returns {string} iconKey string.
 */
export const convertKeysToIcons = (key, fields) => {
	if ( 'string' !== typeof key || '' === key ) {
		return key;
	}

	let iconKey = '';

	switch ( key ) {
		case 'orientation':
			iconKey = fields[key] === 0 ? 'portrait' : 'landscape';
			break;

		default: iconKey = key;
			break;
	}

	return iconKey;
}
