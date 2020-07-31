// const {
// 	element: {
// 		React,
// 		ReactDOM,
// 	},
// } = wp;
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

test('Render an SVG Material Icon.', () => {
	const div = document.createElement('div');
	const button = wrapper.find( 'button' );
	const wrapper = TestUtils.renderIntoDocument(
		<div>
			<button>
				<span>Hover Me!</span>
			</button>
		</div>
	);

	expect( wrapper.type() ).toBe( 'button' );
	// const {debug} = render;
	// console.log(debug);

	ReactDOM.render(div, 'div');
});