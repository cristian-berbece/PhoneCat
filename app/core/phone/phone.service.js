/**
 * Created by Cristi on 26.09.2016.
 */
var module = angular.module('core.phone');

var serviceConfig = ['$resource', function ($resource) {
    return $resource('phone/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
        }
    });
}];
module.factory('Phone', serviceConfig);
