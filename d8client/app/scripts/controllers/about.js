'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the d8clientApp
 */
angular.module('d8clientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
