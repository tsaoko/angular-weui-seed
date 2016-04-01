'use strict';

angular.module('caoguoApp.toast', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/toast', {
		templateUrl: 'toast/toast.html',
		controller: 'ToastCtrl'
	});
}])

.controller('ToastCtrl', [
	'$scope',
	'$weuiBody',
	function($scope, $weuiBody) {
		$weuiBody.addClass('aaa');

		console.log($weuiBody.get());
	}
]);