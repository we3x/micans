'use strict'

require('angular');

angular.module('micans', [
  require('angular-ui-router'),
])
  .config(require('./config.js'))
  .constant('API_URL', 'localhost:8000/api/v1/');
