'use strict';

/**
 * @ngdoc directive
 * @name crossoverApp.directive:progress
 * @description
 * # progress
 */
angular.module('crossoverApp')
  .directive('progresss', function () {
    return {
      templateUrl: '/views/progress.html',
      restrict: 'E',
      scope:{
        status:'=',
        value: '='
      }
    };
  });
