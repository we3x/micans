'use strict'

module.exports = [
  '$scope',
  'tikets',
  '$stateParams',
  'micansService',
  '$window',
  function($scope, tikets, $stateParams, micansService, $window){
    $scope.tikets = tikets.data;
    $scope.spisakId = $stateParams.spisakId;

    $scope.deleteTiket = function(tiket){
      console.log(tiket);
      if (tiket.stanje !== "obrisano"){
        micansService.changeState(tiket, "obrisano").then(function(){
          $window.location.reload();
        })
      } else {
        micansService.deleteTiket(tiket.id).then(function(){
          $window.location.reload();
        })
      }
    };

    $scope.changeState = function(tiket){
      if (tiket.stanje === "ne_isporuceno"){
        micansService.changeState(tiket, "isporuceno").then(function(){
          $window.location.reload();
        })
      } else {
        micansService.changeState(tiket, "ne_isporuceno").then(function(){
          $window.location.reload();
        })
      }
    };

    $scope.createTiket = function(ime, prezime, adresa, kolicina, napomena){
      micansService.createTiket({
        ime, prezime, adresa, kolicina, napomena
      }, $scope.spisakId).then(function(){
        $window.location.reload();
      })
    }
  }
];
