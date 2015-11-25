import template from './mooAccordionPanelHeader.html';

let mooAccordionPanelHeaderComponent = function () {
  return {
    restrict: 'E',
    transclude: true,
    require: ['^mooAccordionPanel'],
    template
  };
};

export default mooAccordionPanelHeaderComponent;
