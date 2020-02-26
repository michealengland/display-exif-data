/**
 * External dependencies
 */
import PropTypes from 'prop-types';

import ExifIcon from './material-icons';

const ExifFields = ( { exifData, allowedKeys, displayIcon } ) => {
	return (
		<ul>
			{ allowedKeys.map( ( key ) => {
				return (
					<li key={ key }>
						{  displayIcon ? <ExifIcon icon={ key } /> : '' }
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