'use strict';

module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  function micansConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/spisak/');
    $stateProvider
      .state('home', {
        url: '/spisak/',
        resolve: {
          spisaks: ['micansService',
            function(micansService){
              return micansService.getSpisaks();
            }
          ]
        },
        controller: 'micansController',
        templateUrl: 'views/spisaks.html',
      })
      .state('spisakAll',{
        url: '/:spisakId/all/',
        resolve: {
          tikets: ['micansService', '$stateParams',
            function(micansService, $stateParams){
              console.log("hello");
              return micansService.getAllTikets($stateParams.spisakId);
            }
          ]
        },
        controller: 'tController',
        templateUrl: 'views/tikets.html'
      });
  }
];
