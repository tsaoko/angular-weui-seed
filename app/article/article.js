'use strict';

angular.module('caoguoApp.article', ['ngRoute', 'weui'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/article', {
		templateUrl: 'article/article.html',
		controller: 'ArticleCtrl'
	});
}])

.controller('ArticleCtrl', [
	'$scope',
	'$weuiBody',
	'$weuiTemplateLoader',
	'$weuiToast',
	function($scope, $weuiBody, $weuiTemplateLoader, $weuiToast) {

	}
]);