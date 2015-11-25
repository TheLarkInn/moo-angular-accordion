import mooAccordionDirective from './mooAccordion.js';

(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (root.hasOwnProperty('angular')) {
    // Browser globals (root is window), we don't register it.
    factory(root.angular);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'));
  }
}(this, function (angular) {
  'use strict';
  // create your angular module and do stuff
  var moduleName = 'mooAngular.accordion';
  var mod = angular.module(moduleName, []);
  
  mooAccordionDirective(mod);

  return moduleName; // the name of your module
}));