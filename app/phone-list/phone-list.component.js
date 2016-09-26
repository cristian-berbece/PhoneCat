var module = angular.module('phoneList'); 

/** PhoneListController 
Controller used in the phone-list component
Performs a nice GET request for the phones.json file
*/
var PhoneListController = function($http) {
	var self = this;
	
	//default way of ordering list
	self.orderProp = 'age';

	//link is relative to index.html
	$http.get('phones/phones.json').then(function(response) {
		self.phones = response.data;
	});
};

/**
Dependency injection for PhoneListController
$http: used to get phone list from the server 
*/
PhoneListController.$inject = ['$http'];


/** phoneList Component
To be deployed just by using <phone-list></phone-list>
Displays a list of all phones in phones.json
Performs filtering and ordering
*/
module.component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController,
});
