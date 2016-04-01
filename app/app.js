'use strict';

// Declare app level module which depends on views, and components
angular.module('caoguoApp', [
	'ngRoute',
	'caoguoApp.home',
	'caoguoApp.button',
	'caoguoApp.cell'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo: '/home'
		})
		.when('/button', {
			templateUrl: 'button/button.html',
			controller: 'ButtonCtrl'
		})
		.when('/cell', {
			templateUrl: 'cell/cell.html',
			controller: 'CellCtrl'
		});
}]);