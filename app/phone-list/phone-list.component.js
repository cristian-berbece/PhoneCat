
var module = angular.module('phoneList'); 


var PhoneListController = function($http) {
	var self = this;
	
	//default way of ordering list
	self.orderProp = 'age';

	//link is relative to index.html
	$http.get('phones/phones.json').then(function(response) {
		self.phones = response.data;
	});
};

PhoneListController.$inject = ['$http'];

module.component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController,
});
