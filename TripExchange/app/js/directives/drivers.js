'use strict';

app.directive('drivers', [function() {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/drivers.html',
        scope: true,
        replace: true
    }
}]);
