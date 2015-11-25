import mooAccordionDirective from './mooAccordion.js';

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        if (typeof angular === 'undefined') {
            factory(require('angular'));
            module.exports = 'mooAngularAccordion';
        } else {
            factory(angular);
            module.exports = 'mooAngularAccordion';
        }
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['angular'], factory);
    } else {
        // Global Variables
        factory(root.angular);
    }
}(this, function (angular) {
  'use strict';
  // create your angular module and do stuff
  var moduleName = 'mooAngular.accordion';
  var mod = angular.module(moduleName, []);
  
  mooAccordionDirective(mod);

  return moduleName; // the name of your module
}));