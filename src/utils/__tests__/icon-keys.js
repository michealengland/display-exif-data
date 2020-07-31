import { convertKeysToIcons } from 'src/utils/icon-keys.js';

test('converKeysToIcons empty key', () => {
	expect(
		convertKeysToIcons( '', {a: 'test'} )  )
	.toBe('');
});