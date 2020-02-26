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