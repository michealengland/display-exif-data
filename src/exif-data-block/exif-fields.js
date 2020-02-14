import ExifIcon from './material-icons';

const ExifFields = ( { exifData, allowedKeys } ) => {
	return (
		<ul>
			{ allowedKeys.map( ( key ) => {
				return (
					<li key={ key }>
						<ExifIcon icon={ key } />
						{ `${ key }: ${ exifData[key].toString() }` }
					</li>
				);
			} ) }
		</ul>
	);
}

export default ExifFields;