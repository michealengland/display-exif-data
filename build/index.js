/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/exif-data-block/attributes.json":
/*!*********************************************!*\
  !*** ./src/exif-data-block/attributes.json ***!
  \*********************************************/
/*! exports provided: exifDataToggle, exifAperture, exifCredit, exifCamera, exifCaption, exifCreatedTimeStamp, exifCopyright, exifFocalLength, exifIso, exifShutterSpeed, exifTitle, exifOrientation, exifKeywords, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"exifDataToggle\":{\"type\":\"boolean\",\"default\":false},\"exifAperture\":{\"type\":\"string\",\"default\":\"\"},\"exifCredit\":{\"type\":\"string\",\"default\":\"test\"},\"exifCamera\":{\"type\":\"string\",\"default\":\"\"},\"exifCaption\":{\"type\":\"string\",\"default\":\"\"},\"exifCreatedTimeStamp\":{\"type\":\"string\",\"default\":\"\"},\"exifCopyright\":{\"type\":\"string\",\"default\":\"\"},\"exifFocalLength\":{\"type\":\"string\",\"default\":\"\"},\"exifIso\":{\"type\":\"string\",\"default\":\"\"},\"exifShutterSpeed\":{\"type\":\"string\",\"default\":\"\"},\"exifTitle\":{\"type\":\"string\",\"default\":\"\"},\"exifOrientation\":{\"type\":\"string\",\"default\":\"\"},\"exifKeywords\":{\"type\":\"array\",\"default\":[]}}");

/***/ }),

/***/ "./src/exif-data-block/index.js":
/*!**************************************!*\
  !*** ./src/exif-data-block/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes.json */ "./src/exif-data-block/attributes.json");
var _attributes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes.json */ "./src/exif-data-block/attributes.json", 1);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Used to modify the block’s edit component. It receives the original block BlockEdit component and returns a new wrapped component.
 *
 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 * @note This demo is based on modified version of Zac Gordons Advanced Gutenberg course.
 */

/**
 * Internal dependencies
 */

var _wp = wp,
    InspectorControls = _wp.blockEditor.InspectorControls,
    _wp$components = _wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    createHigherOrderComponent = _wp.compose.createHigherOrderComponent,
    Fragment = _wp.element.Fragment,
    __ = _wp.i18n.__;
var imgId = 422;
/**
 * WordPress dependencies
 */

 // GET
// apiFetch( { path: '/wp/v2/media/' } ).then( posts => {
// 	console.log( 'posts', posts );
// } );
// POST

var fetchImgMetaData = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
  path: "/wp/v2/media/".concat(imgId),
  method: 'POST' // data: { title: 'New Post Title' },

}).then(function (res) {
  var getImgMetaData = res.media_details.image_meta;
  return getImgMetaData;
}); // const promise1 = new Promise( function( resolve, reject ) {
// 	resolve('Success!');
// });

var ExifData = function ExifData() {
  var aperture = fetchImgMetaData.aperture;
  console.log(fetchImgMetaData);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, fetchImgMetaData.aperture));
};
/**
 * Insert new attributes into block.
 *
 * @param {Object} settings block settings.
 * @param {string} name block name.
 * @return {Object} settings with updated attributes.
 */


var insertNewImgAttributes = function insertNewImgAttributes(settings, name) {
  if ('core/image' !== name) {
    return settings;
  } // Insert new attributes.


  settings.attributes = _attributes_json__WEBPACK_IMPORTED_MODULE_1__;
  return settings;
};

var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var exifDataToggle = props.attributes.exifDataToggle,
        setAttributes = props.setAttributes;
    var insertClassName = exifDataToggle ? 'exif-data-enabled' : '';

    var onToggleChange = function onToggleChange(newValue) {
      setAttributes({
        exifDataToggle: newValue
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: insertClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ExifData, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Enable Exif Data')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: __('Display exif data from image file.'),
      checked: exifDataToggle,
      onChange: onToggleChange
    }))));
  };
}, 'withInspectorControl');
/**
 * Modify the block save function.
 *
 * @param {Object} el
 * @param {Object} block data.
 * @param {Object} attributes from block.
 * @return {Object} updated element object.
 */

var modifySavedElement = function modifySavedElement(el, block, attributes) {
  var exifDataToggle = attributes.exifDataToggle; // Return early if not image block or if exifData is false.

  if (!'core/image' === block.name || exifDataToggle === false) {
    return el;
  }

  return el.props.className = exifDataToggle ? 'expecto-patronum' : '';
}; // Set new attributes.


wp.hooks.addFilter('blocks.registerBlockType', 'gfd/add-code-attributes', insertNewImgAttributes); // Insert editor control.

wp.hooks.addFilter('editor.BlockEdit', 'core/code', withInspectorControls); // Modify the saved value.

wp.hooks.addFilter('blocks.getSaveElement', 'gfd/modify-code-save-settings', modifySavedElement);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exif_data_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exif-data-block */ "./src/exif-data-block/index.js");


/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map