/**
 * WordPress dependencies
 */

const { Path, SVG } = wp.components;

export const Description = () => (
	<SVG width="24" height="24" viewBox="0 0 24 24" version="1.1">
		<Path d="M0 0h24v24H0z" fill="none"/>
		<Path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
	</SVG>
);