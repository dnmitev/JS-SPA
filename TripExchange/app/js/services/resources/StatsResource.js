'use strict';

app.factory('StatsResource', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var StatsResource = $resource(baseServiceUrl + '/api/stats'),
        cachedStatistics;

    return {
        get: function () {
            if (!cachedStatistics) {
                cachedStatistics = StatsResource.get();
            }

            return cachedStatistics;
        }
    }
}]);
