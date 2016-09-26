var module = angular.module('phoneDetail');

/** PhoneDetailController
Extracts the phoneId from the Url using $routeParams
*/	
var PhoneDetailController = function($routeParams) {
	this.phoneId = $routeParams.phoneId;
}

/**
Dependency injection for PhoneDetailController
$routeParams: used to determine the id of the phone
*/
PhoneDetailController.$inject = ['$routeParams'];

/**
Actual declaration of the component
*/
module.component('phoneDetail', {
	//To be replaced with a templateUrl
	template: 'TBD : Detail view for <span>{{$ctrl.phoneId}}</span>',
	controller: PhoneDetailController,
});
