'use strict'

module.exports = [
  '$scope',
  'tikets',
  function($scope, tikets){
    $scope.tikets = tikets.data;
  }
];
