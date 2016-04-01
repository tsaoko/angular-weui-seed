'use strict';

angular.module('caoguoApp.button', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/button', {
		templateUrl: 'button/button.html',
		controller: 'ButtonCtrl'
	});
}])

.controller('ButtonCtrl', [function() {

}]);