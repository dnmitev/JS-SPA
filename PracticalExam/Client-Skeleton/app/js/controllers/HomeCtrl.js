'use strict';

app.controller('HomeCtrl',['$scope', 'DriverService','StatsService', 'TripService',
    function ($scope, DriverService, StatsService, TripService) {
        $scope.drivers = DriverService.getPublicDrivers();
        $scope.stats = StatsService.getStats();
        $scope.trips = TripService.getPublicTrips();
        $scope.driverLimit = 10;
    }]);
