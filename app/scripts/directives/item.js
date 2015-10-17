'use strict';

/**
 * @ngdoc directive
 * @name crossoverApp.directive:item
 * @description
 * # item
 */
angular.module('crossoverApp')
  .directive('item', [function () {
    return {
      templateUrl: '/views/item.html',
      restrict: 'E',
      replace: true,
      scope: {
        data: '='
      },
      link: function postLink($scope) {

        $scope.expanded = false;

        $scope.$on('list:collapse', function () {
          $scope.expanded = false;
        });

        $scope.expandedToggle = function () {

          //Show expanded item only for done tasks
          if(!$scope.data.isDone){
            return;
          }

          //Notify our app about we want open this item
          if (!$scope.expanded) {
            $scope.$emit('item:expanded');
          }

          $scope.expanded = !$scope.expanded;
        };

      }
    };
  }]);
