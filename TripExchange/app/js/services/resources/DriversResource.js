'use strict';

app.factory('DriversResource', ['$resource', 'authorization', 'baseServiceUrl', function ($resource, authorization, baseServiceUrl) {
    var DriversResource = $resource(baseServiceUrl + '/api/drivers/:id', null, {
        'public': {method: 'GET', isArray: true},
        'request': {method: 'GET', isArray: true, headers: authorization.getAuthorizationHeader()},
        'byId': {method: 'GET', params: {id: '@id'}, isArray: false, headers: authorization.getAuthorizationHeader()}
    });

    return {
        public: function () {
            return DriversResource.public();
        },
        all: function (request) {
            return DriversResource.request(request);
        },
        byId: function (id) {
            return DriversResource.byId({id: id});
        }
    }
}]);
