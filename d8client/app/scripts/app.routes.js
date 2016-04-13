(function () {
	'use strict';

	angular
		.module('app.routes')
		.config(config);

	config.$inject = ['$routeProvider'];

	/**
	 * @name config
	 * @desc Define valid application routes
	 */

	function config($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'views/main.html'
    })
    .when('/about', {
      controller: 'AboutCtrl',
      templateUrl: 'views/about.html'
    })
    .when('/node/:nid', {
      controller: 'NodeCtrl',
      templateUrl: 'views/node.html'
    })
    .otherwise({
      redirectTo: '/'
    });
	}
})();
