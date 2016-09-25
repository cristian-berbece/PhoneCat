var phonecatApp = angular.module('phonecatApp', []);
//PhoneListController : 
PhoneListController.$inject = ['$scope'];
function PhoneListController($scope) {
	$scope.message = "F**K YEAH";
	$scope.phones = [
	    {
	      name: 'Nexus S',
	      snippet: 'Fast just got faster with Nexus S.'
	    }, {
	      name: 'Motorola XOOM™ with Wi-Fi',
	      snippet: 'The Next, Next Generation tablet.'
	    }, {
	      name: 'MOTOROLA XOOM™',
	      snippet: 'The Next, Next Generation tablet.'
	    }
  	];
};
phonecatApp.controller('PhoneListController',PhoneListController);

