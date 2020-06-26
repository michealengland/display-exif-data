const {
	hooks: {
		applyFilters,
	},
} = wp;

/**
 * Format Unix timestamp.
 *
 * @param {*} unixTimeStamp
 * @returns {string} formattedDate a human readable date.
 */
export const formatUnixTimeStamp = (unixTimeStamp) => {
	if ( typeof unixTimeStamp !== 'number' ) {
		return unixTimeStamp;
	}

	// Convert Unix TimeStampe to milliseconds
	const milliseconds = unixTimeStamp * 1000;

	// Create new dateObject.
	const dateObject = new Date(milliseconds);

	// Create filterable date.
	const formattedDate = dateObject.toLocaleString(applyFilters('ded.dateLocaleStringFormat', '')) //2019-12-9 10:30:15

	return formattedDate;
}
