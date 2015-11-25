/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _mooAccordion = __webpack_require__(1);
	
	var _mooAccordion2 = _interopRequireDefault(_mooAccordion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (root, factory) {
	    if (typeof module !== 'undefined' && module.exports) {
	        // CommonJS
	        if (typeof angular === 'undefined') {
	            var angular = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	            factory(angular);
	            module.exports = 'mooAngularAccordion';
	        } else {
	            factory(angular);
	            module.exports = 'mooAngularAccordion';
	        }
	    } else if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Global Variables
	        factory(root.angular);
	    }
	})(undefined, function (angular) {
	    'use strict'
	    // create your angular module and do stuff
	    ;
	    var moduleName = 'mooAngular.accordion';
	    var mod = angular.module(moduleName, []);
	
	    (0, _mooAccordion2.default)(mod);
	
	    return moduleName; // the name of your module
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _mooAccordion = __webpack_require__(2);
	
	var _mooAccordion2 = _interopRequireDefault(_mooAccordion);
	
	var _mooAccordionPanel = __webpack_require__(5);
	
	var _mooAccordionPanel2 = _interopRequireDefault(_mooAccordionPanel);
	
	var _mooAccordionPanelTrigger = __webpack_require__(8);
	
	var _mooAccordionPanelTrigger2 = _interopRequireDefault(_mooAccordionPanelTrigger);
	
	var _mooAccordionPanelHeader = __webpack_require__(10);
	
	var _mooAccordionPanelHeader2 = _interopRequireDefault(_mooAccordionPanelHeader);
	
	var _mooAccordionPanelBody = __webpack_require__(12);
	
	var _mooAccordionPanelBody2 = _interopRequireDefault(_mooAccordionPanelBody);
	
	var _mooRepeatTransclude = __webpack_require__(14);
	
	var _mooRepeatTransclude2 = _interopRequireDefault(_mooRepeatTransclude);
	
	var _mooAccordionPanelController = __webpack_require__(7);
	
	var _mooAccordionPanelController2 = _interopRequireDefault(_mooAccordionPanelController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	   app.directive('mooAccordion', _mooAccordion2.default).directive('mooAccordionPanel', ['$parse', _mooAccordionPanel2.default]).directive('mooAccordionPanelTrigger', ['$parse', _mooAccordionPanelTrigger2.default]).directive('mooAccordionPanelHeader', ['$parse', _mooAccordionPanelHeader2.default]).directive('mooAccordionPanelBody', ['$parse', _mooAccordionPanelBody2.default]).controller('mooAccordionPanelCtrl', _mooAccordionPanelController2.default);
	
	   (0, _mooRepeatTransclude2.default)(app);
	};
	
	// Controllers Needed to be registered for use in 'ng-controller'

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mooAccordion = __webpack_require__(3);
	
	var _mooAccordion2 = _interopRequireDefault(_mooAccordion);
	
	var _mooAccordion3 = __webpack_require__(4);
	
	var _mooAccordion4 = _interopRequireDefault(_mooAccordion3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mooAccordionComponent = function mooAccordionComponent() {
	  return {
	    restrict: 'E',
	    transclude: true,
	    template: _mooAccordion2.default,
	    controller: _mooAccordion4.default,
	    controllerAs: 'accordionCtrl',
	    bindToController: true,
	    link: function linkFn(scope, element, attrs, controller, transcludeFn) {
	      scope.multi = 'multi' in attrs;
	    }
	  };
	};
	
	exports.default = mooAccordionComponent;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"Accordion Container u-pH4 u-lg-pH8\" ng-transclude></div>\n";

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MooAccordionController = function MooAccordionController() {
	  _classCallCheck(this, MooAccordionController);
	
	  this.name = 'mooAccordion';
	};
	
	exports.default = MooAccordionController;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mooAccordionPanel = __webpack_require__(6);
	
	var _mooAccordionPanel2 = _interopRequireDefault(_mooAccordionPanel);
	
	var _mooAccordionPanel3 = __webpack_require__(7);
	
	var _mooAccordionPanel4 = _interopRequireDefault(_mooAccordionPanel3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mooAccordionPanelComponent = function mooAccordionPanelComponent() {
	  return {
	    restrict: 'E',
	    transclude: true,
	    require: ['^mooAccordion'],
	    template: _mooAccordionPanel2.default,
	    bindToController: true,
	    compile: function compileFn(tElement, tAttrs, transcludeFn) {
	      if (tAttrs.repeat) {
	        tElement.children().attr('ng-repeat', tAttrs['repeat']);
	        tElement.children().attr('ng-controller', 'mooAccordionPanelCtrl as accordionPanelCtrl');
	      }
	      return function linkFn(scope, element, attrs, transcludeFn) {};
	    }
	  };
	};
	
	exports.default = mooAccordionPanelComponent;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"Accordion-panel\" moo-repeat-transclude ng-class=\"{'is-open': accordionPanelCtrl.panelIsOpen}\"></div>";

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MooAccordionPanelCtrl = function MooAccordionPanelCtrl($scope, $rootScope) {
	  var _this = this;
	
	  _classCallCheck(this, MooAccordionPanelCtrl);
	
	  this.panelIsOpen = false;
	  this.togglePanelState = function ($event, $index) {
	    this.panelIsOpen = !this.panelIsOpen;
	    $rootScope.$broadcast('mooAccordionPanelOpened', { targetScopeId: $scope.$id });
	  };
	
	  if (!$scope.multi) {
	    $scope.$on('mooAccordionPanelOpened', function ($event, dataObject) {
	      if ($scope.$id != dataObject.targetScopeId) {
	        _this.panelIsOpen = false;
	      }
	    });
	  }
	};
	
	MooAccordionPanelCtrl.$inject = ['$scope', '$rootScope'];
	exports.default = MooAccordionPanelCtrl;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mooAccordionPanelTrigger = __webpack_require__(9);
	
	var _mooAccordionPanelTrigger2 = _interopRequireDefault(_mooAccordionPanelTrigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mooAccordionPanelTriggerComponent = function mooAccordionPanelTriggerComponent() {
	  return {
	    restrict: 'E',
	    transclude: true,
	    require: ['^mooAccordionPanelHeader'],
	    template: _mooAccordionPanelTrigger2.default
	  };
	};
	
	exports.default = mooAccordionPanelTriggerComponent;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<ng-transclude ng-click='accordionPanelCtrl.togglePanelState($event, $index)' class=\"Accordion-panelTrigger\"></ng-transclude>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mooAccordionPanelHeader = __webpack_require__(11);
	
	var _mooAccordionPanelHeader2 = _interopRequireDefault(_mooAccordionPanelHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mooAccordionPanelHeaderComponent = function mooAccordionPanelHeaderComponent() {
	  return {
	    restrict: 'E',
	    transclude: true,
	    require: ['^mooAccordionPanel'],
	    template: _mooAccordionPanelHeader2.default
	  };
	};
	
	exports.default = mooAccordionPanelHeaderComponent;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"Accordion-panelHeader\" ng-transclude></div>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mooAccordionPanelBody = __webpack_require__(13);
	
	var _mooAccordionPanelBody2 = _interopRequireDefault(_mooAccordionPanelBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mooAccordionPanelBodyComponent = function mooAccordionPanelBodyComponent() {
	  return {
	    restrict: 'E',
	    transclude: true,
	    require: ['^mooAccordionPanel'],
	    template: _mooAccordionPanelBody2.default
	  };
	};
	
	exports.default = mooAccordionPanelBodyComponent;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"Accordion-panelBody\" ng-transclude></div>";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mooRepeatTransclude = __webpack_require__(15);
	
	var _mooRepeatTransclude2 = _interopRequireDefault(_mooRepeatTransclude);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.directive('mooRepeatTransclude', _mooRepeatTransclude2.default);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	  mooRepeatTransclude:
	
	  When you try to use transclude with a custom directive that
	  takes and inputs that interpolated DOM nested within an ng-repeat,
	  The ng-repeat scope is not respected and you do not have access to repeat scope from
	  the transcluded DOM:
	
	  <custom>
	    <div>
	      {{$index}} <= Will not grab from repeat index if transcluded dom has ng-repeat wraped around it
	    </div>
	  </custom>
	
	  This directive solves this problem. You use it in a custom directive's template and replace
	  ng-transclude with `moo-repeat-transclude`:
	
	  (Directive Template)
	  template: `<div class='customDirective' ng-repeat='item in items' moo-repeat-transclude></div>`
	*/
	
	var mooRepeatTranscludeComponent = function mooRepeatTranscludeComponent() {
	  return {
	    link: function link(scope, element, $attrs, controller, transcludeFn) {
	      if (!transcludeFn) {
	        throw minErr('ngTransclude')('orphan', 'Illegal use of ngTransclude directive in the template! ' + 'No parent directive that requires a transclusion found. ' + 'Element: {0}', startingTag(element));
	      }
	      var innerScope = scope.$new();
	      transcludeFn(innerScope, function (clone) {
	        element.empty();
	        element.append(clone);
	        element.on('$destroy', function () {
	          innerScope.$destroy();
	        });
	      });
	    }
	  };
	};
	
	exports.default = mooRepeatTranscludeComponent;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map