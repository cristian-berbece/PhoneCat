var module = angular.module('phoneList'); 
	
/** PhoneListController
 * Controller used in the phone-list component
 * Performs a nice GET request for the phones.json file
*/
var PhoneListController = function(Phone) {
	var self = this;
	//default way of ordering list
	self.orderProp = 'age';
	self.phones = Phone.query();
};

/**
 * Dependency injection for PhoneListController
 * Phone Service : user to GET phones list
 */
PhoneListController.$inject = ['Phone'];

/** phoneList Component
 * To be deployed just by using <phone-list></phone-list>
 * Displays a list of all phones in phones.json
 * Performs filtering and ordering
*/
module.component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
