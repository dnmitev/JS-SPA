'use strict';

app.directive('statistics',[function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/stats.html',
        scope: {
            stats: '='
        },
        replace: true
    }
}]);
