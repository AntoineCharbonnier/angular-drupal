(function () {
	'use strict';

	angular
		.module('app.home.controllers')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope','$http'];

	/**
	 * @namespace HomeController
	 */

	function HomeController($scope, $http) {

		var self    = this;
		this.$scope = $scope;
		this.$http  = $http;

		self.init();
		self.requestData();
		self.addWatchers();

	}

	HomeController.prototype.init = function(){
		this.sliderDom = document.querySelector(".articles");
		this.$scope.showMe = 0;
	}

	HomeController.prototype.addWatchers = function(){
		this.$scope.$watch('showMe', function(newVal, oldVal){
			this.displacement = (-this.$scope.showMe * 20) + 10 + '%' ;
			this.set_translate(this.sliderDom, this.displacement);
		}.bind(this))
	}

	HomeController.prototype.requestData = function(){
		// get the url of the drupal server url. like localhost but with vhost.conf
		this.$http.get('http://d8server.local.lumini.fr/articles/').then(function(response) {
			console.log('MainCtrl GET response', response);
			var data              = response.data;
			this.$scope.datas     = data;
			this.$scope.pageClass = 'page-home';
		}.bind(this));
	}

	HomeController.prototype.set_translate = function(dom, pix) {
	  dom.setAttribute('style','transform:translateX('+ pix +'); -webkit-transform: translateX('+ pix +')')
	}

	HomeController.prototype.increase = function(){
	  if( this.$scope.showMe < this.$scope.datas.length ){
	    this.$scope.showMe++;
	  }
	}

	HomeController.prototype.decrease = function(){
	  if( 0 < this.$scope.showMe){
	    this.$scope.showMe--;
	  }
	}

	/* self.shwMe works, but to use $watch, the value needs to be in the $scope
	with self.me --> un main.html replace showMe to mainCtrl.showMe */
})();
