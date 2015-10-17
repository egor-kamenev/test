'use strict';

/**
 * @ngdoc function
 * @name crossoverApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crossoverApp
 */
angular.module('crossoverApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
