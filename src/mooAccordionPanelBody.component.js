import template from './mooAccordionPanelBody.html';

let mooAccordionPanelBodyComponent = function () {
  return {
    restrict: 'E',
    transclude: true,
    require: ['^mooAccordionPanel'],
    template
  };
};

export default mooAccordionPanelBodyComponent;
