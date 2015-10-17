'use strict';

/**
 * @ngdoc directive
 * @name crossoverApp.directive:metricsWidget
 * @description
 * # metricsWidget
 */
angular.module('crossoverApp')
  .directive('metricsWidget', [function () {
    return {
      templateUrl: '/views/metrics-widget.html',
      restrict: 'E',
      replace: true,
      scope: {
        data: '='
      }
    };
  }]);
