'use strict';

app.directive('tripsDirective', function () {
    return {
        restrict: 'A',
        templateUrl: '../../views/directives/trips.html',
        scope: true
    }
});
