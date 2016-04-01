'use strict';

angular.module('caoguoApp.cell', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/cell', {
		templateUrl: 'cell/cell.html',
		controller: 'CellCtrl'
	});
}])

.controller('CellCtrl', [function() {

}]);