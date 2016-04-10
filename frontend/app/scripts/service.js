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
    return {
      getSpisaks: getSpisaks,
      getAllTikets: getAllTikets,
    }
  }
];
