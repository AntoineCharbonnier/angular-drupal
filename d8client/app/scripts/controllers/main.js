'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d8clientApp
 */
// angular.module('d8clientApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });


angular.module('d8clientApp')
 .controller('MainCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

   // get the url of the drupal server url. like localhost but with vhost.conf
   $http.get('http://d8server.local.lumini.fr/articles/').then(function(response) {
    console.log('MainCtrl GET response', response);
    var data     = response.data;
    console.log(data);
    $scope.datas = data;
   });
 }]);
