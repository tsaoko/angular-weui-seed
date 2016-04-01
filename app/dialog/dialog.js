'use strict';

angular.module('caoguoApp.dialog', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/dialog', {
		templateUrl: 'dialog/dialog.html',
		controller: 'DialogCtrl'
	});
}])

.controller('DialogCtrl', [
	'$scope',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);