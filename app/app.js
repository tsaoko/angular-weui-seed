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
	'caoguoApp.progress',
	'caoguoApp.msg',
	'caoguoApp.article',
	'caoguoApp.actionsheet',
	'caoguoApp.icons',
	'caoguoApp.panel',
	'caoguoApp.tab',
	'caoguoApp.searchbar',
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
		})
		.when('/progress', {
			templateUrl: 'progress/progress.html',
			controller: 'ProgressCtrl'
		})
		.when('/msg', {
			templateUrl: 'msg/msg.html',
			controller: 'MsgCtrl'
		})
		.when('/article', {
			templateUrl: 'article/article.html',
			controller: 'ArticleCtrl'
		})
		.when('/actionsheet', {
			templateUrl: 'actionsheet/actionsheet.html',
			controller: 'ActionsheetCtrl'
		})
		.when('/icons', {
			templateUrl: 'icons/icons.html',
			controller: 'IconsCtrl'
		})
		.when('/panel', {
			templateUrl: 'panel/panel.html',
			controller: 'PanelCtrl'
		})
		.when('/tab', {
			templateUrl: 'tab/tab.html',
			controller: 'TabCtrl'
		})
		.when('/searchbar', {
			templateUrl: 'searchbar/searchbar.html',
			controller: 'SearchbarCtrl'
		});
}]);