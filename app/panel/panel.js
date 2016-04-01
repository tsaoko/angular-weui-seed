'use strict';

angular.module('caoguoApp.panel', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/panel', {
		templateUrl: 'panel/panel.html',
		controller: 'PanelCtrl'
	});
}])

.controller('PanelCtrl', [
	'$scope',
	'$weuiBody',
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);