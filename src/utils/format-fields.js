import { formatUnixTimeStamp } from './';

/**
 * Format raw exif values.
 *
 * @param {*} exifData object.
 */
export const formatFields = (field) => (
	{
		...field,
		keywords: field?.keywords.join(', '),
		orientation: field?.orientation === 0 ? 'portrait' : 'landscape',
		created_timestamp: field?.created_timestamp ? formatUnixTimeStamp(field.created_timestamp) : '',
	}
);
