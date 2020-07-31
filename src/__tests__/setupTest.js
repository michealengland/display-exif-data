import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import '../__mocks__/matchMedia';

global.wp = {};

configure({
  adapter: new Adapter(),
});


const url = require('@wordpress/url');
const compose = require('@wordpress/compose');
const editPost = require('@wordpress/edit-post');
const data = require('@wordpress/data');
const blocks = require('@wordpress/blocks');
const components = require('@wordpress/components');
const plugins = require('@wordpress/plugins');
const hooks = require('@wordpress/hooks');
const editor = require('@wordpress/editor');
const blockEditor = require('@wordpress/block-editor');
const element = require('react');

// we now require it because we require matchMedia to be defined before this.
const { registerCoreBlocks } = require('@wordpress/block-library');

Object.defineProperty(global.wp, 'url', { get: () => url });
Object.defineProperty(global.wp, 'compose', { get: () => compose });
Object.defineProperty(global.wp, 'editPost', { get: () => editPost });
Object.defineProperty(global.wp, 'data', { get: () => data });
Object.defineProperty(global.wp, 'blocks', { get: () => blocks });
Object.defineProperty(global.wp, 'components', { get: () => components });
Object.defineProperty(global.wp, 'element', { get: () => element });
Object.defineProperty(global.wp, 'plugins', { get: () => plugins });
Object.defineProperty(global.wp, 'hooks', { get: () => hooks });
Object.defineProperty(global.wp, 'editor', { get: () => editor });
Object.defineProperty(global.wp, 'blockEditor', { get: () => blockEditor });
Object.defineProperty(global, 'getSelection', { get: () => () => null });

registerCoreBlocks();