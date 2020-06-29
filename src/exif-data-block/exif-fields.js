/* global dedOptions */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import ExifIcon from './material-icons';
import { convertKeysToIcons, formatFields } from '../utils';
import {startCase, camelCase} from 'lodash';

// Import plugin settings.
const {
	options,
} = dedOptions;

const ExifFields = ( { allowedKeys, displayIcon, exifData } ) => {
	// Remove disabled fields in plugin settings fomr allowedKeys.
	const enabledFields = allowedKeys.filter(x => ! Object.keys( options ).includes( x ) );

	// Format object fields for front-end.
	const formattedFields = formatFields(exifData);

	// List of fields.
	const listItems = enabledFields.map( ( key ) => (
		<li key={ key }>
			{ displayIcon && <ExifIcon icon={ convertKeysToIcons(key, exifData) } /> }
			{ `${ startCase( camelCase( key.replace(/_/g, ' ' ) ) ) }: ${ formattedFields[key].toString() }` }
		</li>
	) );

	return (
		<ul>
			{ listItems }
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