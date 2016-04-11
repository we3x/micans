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
              return micansService.getAllTikets($stateParams.spisakId);
            }
          ]
        },
        controller: 'tController',
        templateUrl: 'views/tikets.html'
      })
      .state('spisakDeleted',{
        url: '/:spisakId/obrisano/',
        resolve: {
          tikets: ['micansService', '$stateParams',
            function(micansService, $stateParams){
              return micansService.getDeletedTikets($stateParams.spisakId);
            }
          ]
        },
        controller: 'tController',
        templateUrl: 'views/tikets.html'
      })
      .state('spisakFinished',{
        url: '/:spisakId/isporuceno/',
        resolve: {
          tikets: ['micansService', '$stateParams',
            function(micansService, $stateParams){
              return micansService.getFinishedTikets($stateParams.spisakId);
            }
          ]
        },
        controller: 'tController',
        templateUrl: 'views/tikets.html'
      })
      .state('spisakUn',{
        url: '/:spisakId/ne_isporuceno/',
        resolve: {
          tikets: ['micansService', '$stateParams',
            function(micansService, $stateParams){
              return micansService.getUnTikets($stateParams.spisakId);
            }
          ]
        },
        controller: 'tController',
        templateUrl: 'views/tikets.html'
      });
  }
];
