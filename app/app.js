'use strict';

// Declare app level module which depends on views, and components
angular.module('caoguoApp', [
	'ngRoute',
	'caoguoApp.home'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]);