'use strict';

/**
 * @ngdoc directive
 * @name crossoverApp.directive:unitTestWidget
 * @description
 * # unitTestWidget
 */
angular.module('crossoverApp')
  .directive('testWidget', [
    '$compile',
    '$http',
    '$templateCache',
    '$parse',
    function () {
      return {
        templateUrl: '/views/test-widget.html',
        restrict: 'E',
        replace: true,
        scope: {
          data: '=',
          title: '@'
        },

        link: function postLink($scope) {

          $scope.chartData = getChartData();

          $scope.colorFunction = function () {
            var colors = ['#72ac4d', '#eb7d3b'];
            return function () {
              return colors.pop();
            };
          };

          $scope.xFunction = function () {
            return function (d) {
              return d.key;
            };
          };
          $scope.yFunction = function () {
            return function (d) {
              return d.value;
            };
          };

          function getChartData() {
            return [
              {
                key: $scope.data.total - $scope.data.passed,
                value: $scope.data.total - $scope.data.passed
              },
              {
                key: $scope.data.passed,
                value: $scope.data.passed
              }
            ];
          }

        }
      };
    }]);
