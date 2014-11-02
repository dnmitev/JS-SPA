'use strict';

app.controller('MyCtrl2',['$scope','notifier', function ($scope, notifier) {
    notifier.success('partial 2');
    notifier.error('partial 2');
}]);
