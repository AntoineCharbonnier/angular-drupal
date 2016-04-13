(function () {
	'use strict';

	angular
		.module('app.about.controllers')
		.controller('AboutController', AboutController);

	AboutController.$inject = ['$scope','$http'];

	/**
	 * @namespace AboutController
	 */

	function AboutController($scope, $http) {

		var self    = this;
		this.$scope = $scope;
		this.$http  = $http;

		self.init();

	}

	AboutController.prototype.init = function(){
		this.sliderDom = document.querySelector(".articles");
		this.$scope.showMe = 0;
	}

	AboutController.prototype.addWatchers = function(){
		// this.$scope.$watch('variableName', function(newVal, oldVal){
		// }.bind(this))
	}
})();
