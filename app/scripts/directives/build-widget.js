'use strict';

/**
 * @ngdoc directive
 * @name crossoverApp.directive:buildWidget
 * @description
 * # buildWidget
 */
angular.module('crossoverApp')
  .directive('buildWidget', function () {
    return {
      templateUrl: '/views/build-widget.html',
      restrict: 'E',
      replace: true,
      scope:{
        data:'='
      }
    };
  });
