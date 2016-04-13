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
    'ngRoute',
    'app.home',
    'app.about',
    'app.node'
    // 'ngCookies',
    // 'ngResource',
    // 'ngSanitize',
    // 'ngTouch'
  ])
  .config(['$routeProvider','$locationProvider', '$httpProvider',   function ( $routeProvider, $locationProvider, $httpProvider) {
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    $httpProvider.defaults.headers.common.Accept = 'application/hal+json';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/node/:nid', {
        templateUrl: 'views/node.html',
        controller: 'NodeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
