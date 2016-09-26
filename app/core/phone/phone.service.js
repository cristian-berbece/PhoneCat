/**
 * Created by Cristi on 26.09.2016.
 */
var module = angular.module('core.phone');

var serviceConfig = ['$resource', function ($resource) {
    /**
     * Returns the phone with the id 'phones'
     * Which in this particular case is acutally the whole list
     * VERY DIRTY TRICK
     * DO NOT AGREE
     */
    return $resource('phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
        }
    });
}];
module.factory('Phone', serviceConfig);
