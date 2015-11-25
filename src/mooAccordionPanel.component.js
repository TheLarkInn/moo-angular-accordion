import template from './mooAccordionPanel.html';
import controller from './mooAccordionPanel.controller';

let mooAccordionPanelComponent = function () {
  return {
    restrict: 'E',
    transclude: true,
    require: ['^mooAccordion'],
    template,
    bindToController: true,
    compile: function compileFn(tElement, tAttrs, transcludeFn) {
      if (tAttrs.repeat) {
        tElement.children().attr('ng-repeat', tAttrs['repeat']);
        tElement.children().attr('ng-controller', 'mooAccordionPanelCtrl as accordionPanelCtrl');
      }
      return function linkFn(scope, element, attrs, transcludeFn) {
      }
    }
  };
};

export default mooAccordionPanelComponent;
