const Save = ( props ) => {
	const {
		attributes: {
			content,
		},
		className,
	} = props;

	return (
		<div className={ className }>
			<h2>{ content }</h2>
		</div>
	);
}

export default Save;