'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d8clientApp
 */

angular.module('d8clientApp')
 .controller('MainCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  var self = this;
  self.showMe = 0;
  // get the url of the drupal server url. like localhost but with vhost.conf
  $http.get('http://d8server.local.lumini.fr/articles/').then(function(response) {
    console.log('MainCtrl GET response', response);
    var data         = response.data;
    $scope.datas     = data;
    $scope.pageClass = 'page-home';
  });
  self.increase = function(){
    console.log("click", self);
    self.showMe++;
    console.log(self.showMe);
  }

}])


angular.module('d8clientApp')
  .directive('controlsIndex', function(){
    return {
      restrict: 'C',
      controller: 'MainCtrl',
      link: function(scope, element, attrs, ctrl){
        // ctrl.increase = function(){
        //   console.log("click", ctrl);
        //   ctrl.showMe++;
        //   console.log(ctrl.showMe);
        // }
        
      }
    }
  });
