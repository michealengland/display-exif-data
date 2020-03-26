
# About This Plugin
**This plugin is under development.**

Display Exif Data is WordPress plugin for displaying exif data hidden in images.

## How to Use
First install this package as a plugin. Next, use the image block and enable the toggle control in the block control panel. That's it.

**Verify your image has exif data if you do not see any changes.**

## Development
1. Clone this plugin into `wp-content/plugins` directory.
2. Run `composer install`.
3. Run `npm install`.
4. Activate the plugin.

## Build Details
https://developer.wordpress.org/block-editor/tutorials/javascript/js-build-setup/

### Scripts
- Use `npm run start` for compiling files on save during development.
- Use `npm run build` for compiling production ready files.

## Changelog

### 0.0.4
- Update plugin structure to use WDS Block Starter
- Add SCSS support
- Add coding standards
- Add auto enqueue of styles in `/src`
- Add namespace to plugin

### 0.0.3
- Fix editor.css enqueue bug
- Improve styles
- Update components
- Add propTypes and defaultProps to all components
- Setup material icon library and ExifIcon component for displaying SVG icons
- Improve component logic
- Fix filter bug that caused filter to render on all blocks
- Refactor settings attribute filter
- Add new display icon settings toggle

### 0.0.2
- Created basic working version of Exif Data features on core/image
- Swapped SCSS for PostCSS
- Added `src/css.js` to fix dynamic style generation bug
- Created .gitignore and stopped tracking build directories
- Updated plugin readme and added contributor details
- Updated WP Scripts to 7.1.0
- Added github action with nodejs.yml

### 0.0.1
- Added Exif Data features to core image block
- Added SCSS compiler

## Special Thanks To...
- [@salcode](https://github.com/salcode) and [@gregrickaby](https://github.com/gregrickaby) for contributions and collaboration.
- [WebDevStudios](https://webdevstudios.com/) for donating hours during [#5FTF](https://twitter.com/search?q=%235FTF&src=typed_query).