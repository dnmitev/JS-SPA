'use strict';

app.filter('onlyDriver', [function () {
    return function (trips, driverId) {
        if (!driverId) {
            return trips;
        }

        trips = trips || [];
        var result = [];

        for (var i = 0, len = trips.length; i < len; i += 1) {
            if (trips[i].driverId === driverId) {
                result.push(trips[i]);
            }
        }

        return result;
    }
}]);
