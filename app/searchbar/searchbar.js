'use strict';

angular.module('caoguoApp.searchbar', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/searchbar', {
		templateUrl: 'searchbar/searchbar.html',
		controller: 'SearchbarCtrl'
	});
}])

.controller('SearchbarCtrl', [
	'$scope',
	'$weuiBody',
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);