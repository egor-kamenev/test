'use strict';

/**
 * @ngdoc directive
 * @name crossoverApp.directive:result
 * @description
 * # result
 */
angular.module('crossoverApp')
  .directive('result', function () {
    return {
      templateUrl: '/views/result.html',
      restrict: 'E',
      scope:{
        data:'='
      }
    };
  });
