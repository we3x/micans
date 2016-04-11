'use strict'

module.exports = [
  '$scope',
  'tikets',
  '$stateParams',
  function($scope, tikets, $stateParams){
    $scope.tikets = tikets.data;
    $scope.spisakId = $stateParams.spisakId;


  }
];
