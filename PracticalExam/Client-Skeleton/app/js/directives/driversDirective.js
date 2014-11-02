
'use strict';

app.directive('driversDirective', function () {
    return {
        restrict: 'A',
        templateUrl: '../../views/directives/drivers.html',
        scope: true
    }
});
