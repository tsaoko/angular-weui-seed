'use strict';

angular.module('caoguoApp.actionsheet', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/actionsheet', {
		templateUrl: 'actionsheet/actionsheet.html',
		controller: 'ActionsheetCtrl'
	});
}])

.controller('ActionsheetCtrl', [
	'$scope',
	'$weuiBody',
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);