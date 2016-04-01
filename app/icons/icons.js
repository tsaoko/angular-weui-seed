'use strict';

angular.module('caoguoApp.icons', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/icons', {
		templateUrl: 'icons/icons.html',
		controller: 'IconsCtrl'
	});
}])

.controller('IconsCtrl', [
	'$scope',
	'$weuiBody',
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);