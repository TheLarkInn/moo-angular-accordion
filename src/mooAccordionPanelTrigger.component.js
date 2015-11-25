import template from './mooAccordionPanelTrigger.html';

let mooAccordionPanelTriggerComponent = function () {
  return {
    restrict: 'E',
    transclude: true,
    require: ['^mooAccordionPanelHeader'],
    template
  };
};

export default mooAccordionPanelTriggerComponent;
