/**
 * Internal dependencies.
 */
import edit from './edit';
import save from './save';

/**
 * WordPress Dependencies.
 */
const {
	blocks: {
		registerBlockType,
	},
	i18n: {
		__,
	},
} = wp;

registerBlockType( 'ded/test-block', {
	title: __( 'Test Block' ),
	description: __( 'Example block to verify plugin works.' ),
	category: __( 'widgets' ),
	attributes: {
		content: {
			type: 'string',
			default: 'test',
		}
	},
	edit,
	save,
} );
