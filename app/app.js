'use strict';

// Declare app level module which depends on views, and components
angular.module('breweryFinder', [
  'ngRoute',
  //'breweryFinder.view1',
  //'breweryFinder.view2',
  'breweryFinder.version'
]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.otherwise({redirectTo: '/index.html'});
}]);
