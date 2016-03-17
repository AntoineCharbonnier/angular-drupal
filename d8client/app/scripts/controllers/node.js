'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:NodeCtrl
 * @description
 * # NodeCtrl
 * Controller of the d8clientApp
 */
angular.module('d8clientApp')
 .controller('NodeCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

   // get the id from the url with $routeParams
   var nid = $routeParams.nid;

   // get the url of the drupal server url. like localhost but with vhost.conf
   $http.get('http://d8server.local.lumini.fr/node/' + nid + '?_format=hal_json').then(function(response) {
    console.log('NodeCtrl GET response', response);
    var data     = response.data;
    $scope.type  = data.type[0].target_id;
    $scope.title = data.title[0].value;
    $scope.body  = data.body[0].value;

    var o = data._links;

    var arr = Object.keys(o).map(function(k) { return o[k] });

    for( var i = 0; i < arr.length; i ++ ){
      if (arr[i][0] != "undefined" && arr[i][0] != null) {
        data = Object.keys(arr[i][0]).map(function(k) { return arr[i][0][k] });
        if ( data[0].indexOf("png") > -1 || data[0].indexOf("jpg") > -1 ) {
          console.log(data[0]);
          $scope.img = data[0];
        }
      }
    }

    console.log('NodeCtrl GET $scope', $scope);
   });
 }]);
