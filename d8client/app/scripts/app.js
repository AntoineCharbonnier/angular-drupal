'use strict';

/* from this tuto http://www.koberg.com/2014/06/08/headless-drupal-8-and-angularjs-theme-separation-of-concerns/ */
/* needs to create database with PhpMyAdmin */
/**
 * @ngdoc overview
 * @name d8clientApp
 * @description
 * # d8clientApp
 *
 * Main module of the application.
 */
angular
  .module('d8clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$httpProvider',  function ( $routeProvider, $httpProvider) {
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    $httpProvider.defaults.headers.common.Accept = 'application/hal+json';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/node/:nid', {
        templateUrl: 'views/node.html',
        controller: 'NodeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
