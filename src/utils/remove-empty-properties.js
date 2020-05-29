/**
 * Remove empty fields from object.
 *
 * @param {*} fields object
 */
export default function stripEmptyFields( fields ) {
	// Clone object fields.
	const clonedFields = {
		...fields
	};

	// Loop through object keys.
	Object.keys( clonedFields ).forEach( (key) => {
		// Remove properties that are undefined.
		if ( ! clonedFields[key] && clonedFields[key] !== undefined ) {
			delete clonedFields[key]
		}
	} );

	return clonedFields;
}