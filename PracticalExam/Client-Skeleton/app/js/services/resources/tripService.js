'use strict';

app.factory('TripService',['$resource','authorization','baseServiceUrl', function ($resource, authorization, baseServiceUrl) {
    var heeaders,
        TripService;

//    headers = authorization.getAuthorizationHeader();

    TripService = $resource(baseServiceUrl + '/api/trips', null, {
        public : {
            method: 'GET',
            isArray: true
        }
    });

    return {
        getPublicTrips: function () {
            return TripService.public();
        }
    };
}]);
