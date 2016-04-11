'use strict'

module.exports = [
  'API_URL',
  '$http',
  function(API_URL, $http){
    function getSpisaks(){
      return $http.get(API_URL + 'spisak/');
    }

    function createSpisak(name){
      return $http.post(API_URL + 'spisak/', {ime: name})
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
      createSpisak: createSpisak,
      getAllTikets: getAllTikets,
      getDeletedTikets: getDeletedTikets,
      getUnTikets: getUnTikets,
      getFinishedTikets: getFinishedTikets,
    }
  }
];
