const ExifFields = ( { exifData, allowedKeys } ) => {

	return (
		<ul>
			{ allowedKeys.map( ( key ) => {
				return (
					<li key={ key }>{ `${ key }: ${ exifData[key].toString() }` }</li>
				);
			} ) }
		</ul>
	);
}

export default ExifFields;