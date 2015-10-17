'use strict';

/**
 * @ngdoc function
 * @name crossoverApp.controller:PieCtrl
 * @description
 * # PieCtrl
 * Controller of the crossoverApp
 */
angular.module('crossoverApp')
  .controller('PieCtrl', ['$scope',function($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.exampleData = [{
      key: 55,
      y: 55,
      color: 'orange'
    }, {
      key: 23,
      y: 23,
      color: 'orange'
    }];

    $scope.colorFunction = function() {
      var colors = ['#72ac4d', '#eb7d3b'];
      return function() {
        return colors.pop();
      };
    };

    $scope.xFunction = function() {
      return function(d) {
        return d.key;
      };
    };
    $scope.yFunction = function() {
      return function(d) {
        return d.y;
      };
    };

  }
  ]);
