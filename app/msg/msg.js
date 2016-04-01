'use strict';

angular.module('caoguoApp.msg', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/msg', {
		templateUrl: 'msg/msg.html',
		controller: 'MsgCtrl'
	});
}])

.controller('MsgCtrl', [
	'$scope',
	'$weuiBody',
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);