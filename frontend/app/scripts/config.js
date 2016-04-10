'use strict';

module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  function micansConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        resolve: {
          spisaks: ['micansService',
            function(micansService){
              return micansService.getSpisaks();
            }
          ]
        },
        controller: 'micansController',
        templateUrl: 'views/spisaks.html',
      });
  }
];
