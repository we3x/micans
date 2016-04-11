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

    function createTiket(tiket, spisakId){
      return $http.post(
        API_URL + 'tiket/',
        {
          ime: tiket.ime,
          prezime: tiket.prezime,
          adresa: tiket.adresa,
          kolicina: tiket.kolicina,
          napomena: tiket.napomena,
          spisak: spisakId,
        });
    }
    function changeState(tiket, state){
      return $http.put(
        API_URL + 'tiket/' + tiket.id + '/',
        {
          ime: tiket.ime,
          prezime: tiket.prezime,
          adresa: tiket.adresa,
          kolicina: tiket.kolicina,
          napomena: tiket.napomena,
          stanje: state,
          spisak: tiket.spisak,
        });
    }

    function deleteTiket(tiketId){
      return $http.delete(API_URL + 'tiket/' + tiketId + '/');
    }

    function deleteSpisak(spisakId){
      return $http.delete(API_URL + 'spisak/' + spisakId + '/');
    }
    return {
      changeState: changeState,
      createSpisak: createSpisak,
      createTiket: createTiket,
      deleteSpisak: deleteSpisak,
      deleteTiket: deleteTiket,
      getAllTikets: getAllTikets,
      getDeletedTikets: getDeletedTikets,
      getFinishedTikets: getFinishedTikets,
      getSpisaks: getSpisaks,
      getUnTikets: getUnTikets,
    }
  }
];
