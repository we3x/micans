'use strict'

require('angular');

angular.module('micans', [
  require('angular-ui-router'),
])
  .config(require('./config.js'))
  .service('micansService', require('./service.js'))
  .controller('micansController', require('./controller.js'))
  .controller('tController', require('./tController.js'))
  .constant('API_URL', 'https://micans-we3x.c9users.io/api/v1/');
