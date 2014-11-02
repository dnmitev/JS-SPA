'use strict';

app.directive('unauthorizedDirective', function() {
    return {
        restrict: 'A',
        templateUrl: '../../views/directives/unauthorized.html'
    }
});
