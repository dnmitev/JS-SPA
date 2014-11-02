'use strict';

app.factory('CitiesService', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var CitiesService;

    CitiesService = $resource(baseServiceUrl + '/api/cities', null, {
        public: {
            method: 'GET'
        }
    });

    return {
        getCities: function () {
            return CitiesService.public();
        }
    };
}]);

