'use strict';

app.controller('MyCtrl',['$scope','notifier', function ($scope, notifier) {
    notifier.success('partial 1');
    notifier.error('partial 1');
}]);
