'use strict';

angular.module('caoguoApp.tab', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/tab', {
		templateUrl: 'tab/tab.html',
		controller: 'TabCtrl'
	});
}])

.controller('TabCtrl', [
	'$scope',
	'$weuiBody',
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);