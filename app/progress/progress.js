'use strict';

angular.module('caoguoApp.progress', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/progress', {
		templateUrl: 'progress/progress.html',
		controller: 'ProgressCtrl'
	});
}])

.controller('ProgressCtrl', [
	'$scope',
	'$weuiBody',
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);