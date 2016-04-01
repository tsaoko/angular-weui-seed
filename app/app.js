'use strict';

// Declare app level module which depends on views, and components
angular.module('caoguoApp', [
	'ngRoute',
	'weui',
	'caoguoApp.home',
	'caoguoApp.button',
	'caoguoApp.cell',
	'caoguoApp.toast',
	'caoguoApp.dialog',
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
		})
		.when('/toast', {
			templateUrl: 'toast/toast.html',
			controller: 'ToastCtrl'
		})
		.when('/dialog', {
			templateUrl: 'dialog/dialog.html',
			controller: 'DialogCtrl'
		});
}]);