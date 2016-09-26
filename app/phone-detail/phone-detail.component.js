var module = angular.module('phoneDetail');

/** PhoneDetailController
Extracts the phoneId from the Url using $routeParams
*/	
var PhoneDetailController = function($http, $routeParams) {
	var self = this;
	self.phoneId = $routeParams.phoneId;

	self.setImage = function setImage(imageUrl) {
		self.mainImageUrl = imageUrl;
	}

	console.log(self.phoneId);
	$http
		.get('phones/' + self.phoneId + '.json')
		.then(function(response) {
			self.phone = response.data;
			self.setImage(self.phone.images[0]);
		}
	);
};

/**
Dependency injection for PhoneDetailController
$routeParams: used to determine the id of the phone
*/
PhoneDetailController.$inject = ['$http','$routeParams'];

/**
Actual declaration of the component
*/
module.component('phoneDetail', {
	//To be replaced with a templateUrl
	// templateUrl: 'TBD : Detail view for <span>{{$ctrl.phoneId}}</span>',
	templateUrl: 'phone-detail/phone-detail.template.html',
	controller: PhoneDetailController,
});
