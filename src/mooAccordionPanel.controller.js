export default class MooAccordionPanelCtrl {

  static $inject = ['$scope', '$rootScope'];

  constructor($scope, $rootScope) {
    this.panelIsOpen = false;
    this.togglePanelState = function($event, $index) {
      this.panelIsOpen = !this.panelIsOpen;
      $rootScope.$broadcast('mooAccordionPanelOpened', {targetScopeId: $scope.$id});
    }
      
    if (!$scope.multi) {
      $scope.$on('mooAccordionPanelOpened', ($event, dataObject) => {
        if ($scope.$id != dataObject.targetScopeId) {
          this.panelIsOpen = false;
        }
      });
    }
    
  }
}