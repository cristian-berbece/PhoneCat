var app = angular.module('phonecatApp');

var configSetup = [
	//Dependency Injection
	'$locationProvider',
	'$routeProvider',
	
	//Actual config function 
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when('/phones', {
				template : '<phone-list></phone-list>'
			})
			.when('/phones/:phoneId', {
				template : '<phone-detail></phone-detail>'
			})
			.otherwise('/phones');
}];
app.config(configSetup);




