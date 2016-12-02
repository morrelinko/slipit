/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(2);

	var _slipit = __webpack_require__(3);

	var _slipit2 = _interopRequireDefault(_slipit);

	var _left = __webpack_require__(7);

	var _left2 = _interopRequireDefault(_left);

	var _right = __webpack_require__(9);

	var _right2 = _interopRequireDefault(_right);

	var _content = __webpack_require__(11);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_angular2.default.module('moSlipit', []).directive('slipit', _slipit2.default).directive('slipitLeft', _left2.default).directive('slipitRight', _right2.default).directive('slipitContent', _content2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.angular;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(4);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _hammer = __webpack_require__(5);

	var _hammer2 = _interopRequireDefault(_hammer);

	var _slipit = __webpack_require__(6);

	var _slipit2 = _interopRequireDefault(_slipit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [function () {
	  return {
	    restrict: 'E',
	    replace: true,
	    transclude: true,
	    scope: {
	      height: '@height',
	      release: '=release'
	    },
	    controller: function controller() {},

	    link: function link(scope, elem, attrs, ctrl) {
	      console.log(scope.height, scope.release);
	      var $elem = (0, _jquery2.default)(elem[0]);
	      var $wrap = $elem.find('.slipit__wrap');
	      var $left = $elem.find('.slipit__left');
	      var $right = $elem.find('.slipit__right');

	      var maxW = $wrap.width();
	      var mv = new _hammer2.default(elem[0], {});

	      $elem.height(scope.height);
	      $left.css({ left: -(maxW + 30), width: maxW });
	      $right.css({ right: -(maxW + 30), width: maxW });

	      mv.on('panstart', function (ev) {});

	      mv.on('panend', function (ev) {
	        $wrap.css({ transform: 'translateX(0px)' });
	      });

	      mv.on('pan', function (ev) {
	        if (ev.center.x >= $elem.offset().left + maxW || ev.center.x <= $elem.offset().left) {
	          if (scope.release) {
	            $wrap.css({ transform: 'translateX(0px)' });
	          }

	          return void 0;
	        }

	        if (ev.deltaX < 0) {
	          $wrap.css({ transform: 'translateX(-' + Math.abs(ev.deltaX) + 'px)' });
	        } else if (ev.deltaX >= 0) {
	          $wrap.css({ transform: 'translateX(' + Math.abs(ev.deltaX) + 'px)' });
	        }
	      });

	      elem.on('$destroy', function () {
	        console.log('destroying element');
	        mv = null;
	      });
	    },
	    template: _slipit2.default
	  };
	}];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = window.jQuery;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = window.Hammer;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"slipit\">\n  <div class=\"slipit__wrap\" ng-transclude></div>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _left = __webpack_require__(8);

	var _left2 = _interopRequireDefault(_left);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [function () {
	  return {
	    restrict: 'AE',
	    replace: true,
	    require: '^slipit',
	    transclude: true,
	    link: function link(scope, elem, attrs, ctrl) {},

	    template: _left2.default
	  };
	}];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"slipit__left\" ng-transclude></div>";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _right = __webpack_require__(10);

	var _right2 = _interopRequireDefault(_right);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [function () {
	  return {
	    restrict: 'AE',
	    replace: true,
	    require: '^slipit',
	    transclude: true,
	    link: function link() {},

	    template: _right2.default
	  };
	}];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"slipit__right\" ng-transclude></div>";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _content = __webpack_require__(12);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [function () {
	  return {
	    restrict: 'AE',
	    replace: true,
	    require: '^slipit',
	    transclude: true,
	    link: function link() {},

	    template: _content2.default
	  };
	}];

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"slipit__content\" ng-transclude></div>";

/***/ }
/******/ ]);