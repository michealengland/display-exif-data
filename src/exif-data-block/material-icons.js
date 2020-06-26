/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/components';

import {
	CalendarToday,
	Camera,
	CameraAlt,
	CenterFocusStrong,
	Copyright,
	Description,
	Iso,
	Label,
	Landscape,
	Portrait,
	ShutterSpeed,
	TagFaces,
} from './icons';

const ExifIcon = ( props ) => {
	const {
		className,
		icon,
		size,
	} = props;

	let svgElement;

	switch ( icon ) {
		case 'aperture':
			svgElement = <CameraAlt />;
			break;

		case 'camera':
			svgElement = <Camera />;
			break;

		case 'caption':
			svgElement = <Description />;
			break;

		case 'created_timestamp':
			svgElement = <CalendarToday />;
			break;

		case 'credit':
			svgElement = <TagFaces />;
			break;

		case 'copyright':
			svgElement = <Copyright />;
			break;

		case 'focal_length':
			svgElement = <CenterFocusStrong />;
			break;

		case 'iso':
			svgElement = <Iso />;
			break;

		case 'keywords':
			svgElement = <Label />
			break;
		case 'landscape':
			svgElement =
			<>
				<Landscape />
			</>;
			break;
		case 'portrait':
			svgElement =
			<>
				<Portrait />
			</>;
			break;
		case 'shutter_speed':
			svgElement = <ShutterSpeed />;
			break;

		case 'title':
			svgElement = <CameraAlt />;
			break;
	}

	if ( ! svgElement ) {
		return null;
	}

	// Generate a class name.
	const iconClass = [ 'dashicon', 'material-' + icon, className ]
		.filter( Boolean )
		.join( ' ' );

	// Renderd icon in HTML.
	const renderIcon = () => {
		return (
			<svg
				aria-hidden
				role="img"
				focusable="false"
				className={ iconClass }
				xmlns="http://www.w3.org/2000/svg"
				width={ size }
				height={ size }
				viewBox={ `0 0 ${ size } ${ size }`}
			>
				{ svgElement }
			</svg>
		);
	}

	return (
		<Icon icon={ renderIcon } />
	);
}

export default ExifIcon;

ExifIcon.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.number.isRequired,
	size: PropTypes.number,
};

ExifIcon.defaultProps = {
	className: '',
	size: 24,
};