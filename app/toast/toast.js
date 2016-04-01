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
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

		$scope.show = function() {
			$weuiToast.show({
				'template': '<div class="weui_toast"><i class="weui_icon_toast"></i><p class="weui_toast_content">已完成</p></div>',
				duration: 3000,
			});
		}

		$scope.load = function() {
			$weuiToast.show({
				'template': '<div class="weui_toast"><i class="weui_icon_toast"></i><p class="weui_toast_content">加载中</p></div>',
				duration: 3000,
			});
		}

	}
]);