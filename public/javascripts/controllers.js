'use strict';

var demoApp = angular.module('demoApp', []);

demoApp.controller('phoneListContoller', ['$scope', function($scope){
	$scope.phones = [
		{'name': 'Nexus S',
		 'snippet': 'Fast just got faster with Nexus S.'},
		{'name': 'Motorola XOOM™ with Wi-Fi',
		 'snippet': 'The Next, Next Generation tablet.'},
		{'name': 'MOTOROLA XOOM™',
		 'snippet': 'The Next, Next Generation tablet.'}
	];
}]);

demoApp.controller('iPhoneListController', ['$scope', function($scope){
	$scope.iphones = [
		'iphone2', 'iphone3', 'iphone3s', 'iphones4', 'iphone4s', 'iphone5', 'iphone5s', 'iphone5c', 'iphone6', 'iphone6+'
	];
}]);

demoApp.controller('remotePhonesController', ['$scope', '$http', function($scope, $http){
	$http.get('/phones').success(function(data){
		$scope.iphones = data;
	});
}]);