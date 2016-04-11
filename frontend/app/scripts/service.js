'use strict'

module.exports = [
  'API_URL',
  '$http',
  function(API_URL, $http){
    function getSpisaks(){
      return $http.get(API_URL + 'spisak/');
    }

    function getAllTikets(id){
      return $http.get(API_URL + 'spisak/' + id + '/all/');
    }

    function getDeletedTikets(id){
      return $http.get(API_URL + 'spisak/' + id + '/obrisano/');
    }

    function getFinishedTikets(id){
      return $http.get(API_URL + 'spisak/' + id + '/isporuceno/');
    }

    function getUnTikets(id){
      return $http.get(API_URL + 'spisak/' + id + '/ne_isporuceno/');
    }
    return {
      getSpisaks: getSpisaks,
      getAllTikets: getAllTikets,
      getDeletedTikets: getDeletedTikets,
      getUnTikets: getUnTikets,
      getFinishedTikets: getFinishedTikets,
    }
  }
];
