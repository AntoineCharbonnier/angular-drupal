(function () {
	'use strict';

	angular
		.module('app.node.controllers')
		.controller('NodeController', NodeController);

	NodeController.$inject = ['$scope','$http', '$routeParams'];

	/**
	 * @namespace NodeController
	 */

	function NodeController($scope, $http, $routeParams) {

		var self          = this;
		this.$scope       = $scope;
		this.$http        = $http;
		this.$routeParams = $routeParams;

		console.log(this.$scope);

		self.init();
		self.requestData();

	}

	NodeController.prototype.init = function(){
		this.nid = this.$routeParams.nid;
	}

	NodeController.prototype.requestData = function(){
		this.$http.get('http://d8server.local.lumini.fr/articles/' + this.nid + '?_format=hal_json').then(function(response) {

	    console.log('NodeCtrl GET response', response);
	    var data          = response.data;
	    this.$scope.title = data[0].title;
	    this.$scope.body  = data[0].body;
	    this.$scope.img   = data[0].field_image;

		}.bind(this));
	}

})();
