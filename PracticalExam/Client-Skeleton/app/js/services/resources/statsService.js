'use strict';

app.factory('StatsService', ['$resource', 'authorization', 'baseServiceUrl', function ($resource, authorization, baseServiceUrl) {
    var StatsService;

    StatsService = $resource(baseServiceUrl + '/api/stats', null, {
        public: {
            method: 'GET'
        }
    });

    return {
        getStats: function () {
            return StatsService.public();
        }
    };
}]);
