import template from './mooAccordion.html';
import controller from './mooAccordion.controller';

let mooAccordionComponent = function () {
  return {
    restrict: 'E',
    transclude: true,
    template,
    controller,
    controllerAs: 'accordionCtrl',
    bindToController: true,
    link: function linkFn(scope, element, attrs, controller, transcludeFn) {
      scope.multi = 'multi' in attrs;
    }
  };
};

export default mooAccordionComponent;
