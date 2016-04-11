'use strict'

module.exports = [
  '$scope',
  'spisaks',
  'micansService',
  '$window',
  function($scope, spisaks, micansService, $window){
    $scope.spisaks = spisaks.data;
    $scope.createSpisak = function(ime){
      micansService.createSpisak(ime).then(function(){
        $window.location.reload();
      })
    }

  }
];
