'use strict';

app.controller('DriversCtrl', ['$scope', 'DriverService', '$location', 'auth', '$routeParams',
    function ($scope, DriverService, $location, auth, $routeParams) {

        $scope.drivers = DriverService.getPublicDrivers();
        $scope.driver = DriverService.getDriverById($routeParams.id);

        $scope.trips = $scope.driver.$promise.then(function (data) {
            $scope.trips = data.trips;
        });
        $scope.isAuthorized = auth.isAuthenticated().$$state ? false : true;
        $scope.driverLimit = 10;

        if (!$scope.isAuthorized) {
            $location.path('unauthorized');
        }

    }]);