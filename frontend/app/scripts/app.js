'use strict'

require('angular');

angular.module('micans', [
  require('angular-ui-router'),
])
  .config(require('./config.js'))
  .service('micansService', require('./service.js'))
  .controller('micansController', require('./controller.js'))
  .controller('tController', require('./tController.js'))
  .constant('API_URL', 'http://127.0.0.1:8000/api/v1/');
