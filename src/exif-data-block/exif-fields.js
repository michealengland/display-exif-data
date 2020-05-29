/* global dedOptions */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';

import ExifIcon from './material-icons';

// Import plugin settings.
const {
	options
} = dedOptions;

const ExifFields = ( { allowedKeys, displayIcon, exifData } ) => {
	// Remove disabled fields in plugin settings fomr allowedKeys.
	const enabledFields = allowedKeys.filter(x => ! Object.keys( options ).includes( x ) );

	return (
		<ul>
			{ enabledFields.map( ( key ) => {
				return (
					<li key={ key }>
						{ displayIcon && <ExifIcon icon={ key } /> }
						{ `${ key }: ${ exifData[key].toString() }` }
					</li>
				);
			} ) }
		</ul>
	);
}

export default ExifFields;

ExifFields.propTypes = {
	allowedKeys: PropTypes.array.isRequired,
	displayIcon: PropTypes.bool,
	exifData: PropTypes.object.isRequired,
};

ExifFields.defaultProps = {
	displayIcon: false,
};