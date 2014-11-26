'use strict';

app.directive('trips', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/trips.html',
        scope: true,
        replace: true
    }
}]);
