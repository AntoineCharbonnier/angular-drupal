'use strict';

/**
 * @ngdoc function
 * @name d8clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d8clientApp
 */

// TODO: Create watch task for binding data model with container displacement
// TODO: Create zoom-in / zoom-out animation
// TODO: Make a build

angular.module('d8clientApp')
 .controller('MainCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  var self = this;
  $scope.showMe = 0;

  //self.shwMe works, but to use $watch, the value needs to be in the $scope
  // with self.me --> un main.html replace showMe to mainCtrl.showMe

  self.sliderDom = document.querySelector(".articles");
  // console.log(window.getComputedStyle(self.sliderDom));



  $scope.$watch('showMe', function(newVal, oldVal){
    self.displacement = (-$scope.showMe * 20) + 10 + '%' ;
    self.set_translate(self.sliderDom, self.displacement);
  })

  // get the url of the drupal server url. like localhost but with vhost.conf
  $http.get('http://d8server.local.lumini.fr/articles/').then(function(response) {
    console.log('MainCtrl GET response', response);
    var data         = response.data;
    $scope.datas     = data;
    $scope.pageClass = 'page-home';
  });

  self.set_translate = function(dom, pix) {
    dom.setAttribute('style','transform:translateX('+ pix +'); -webkit-transform: translateX('+ pix +')')
  }


  self.increase = function(){
    console.log("click increase", $scope.showMe, $scope.datas.length);
    if( $scope.showMe < $scope.datas.length ){
      $scope.showMe++;
    }
  }

  self.decrease = function(){
    console.log("click decrease", $scope.showMe, $scope.datas.length);
    if( 0 < $scope.showMe){
      $scope.showMe--;
    }
  }
}])
