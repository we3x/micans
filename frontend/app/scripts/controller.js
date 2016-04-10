'use strict'

module.exports = [
  '$scope',
  'spisaks',
  function($scope, spisaks){
    $scope.spisaks = spisaks.data;
  }
];
