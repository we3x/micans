'use strict'

module.exports = [
  'API_URL',
  '$http',
  function(API_URL, $http){
    function getSpisaks(){
      return $http.get(API_URL + 'spisak/');
    }
    return {
      getSpisaks: getSpisaks,
    }
  }
];
