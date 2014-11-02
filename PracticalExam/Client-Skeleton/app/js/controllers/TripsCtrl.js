'use strict';

app.controller('TripsCtrl',['$scope', 'TripService', 'authorization','auth','baseServiceUrl','notifier','$http', '$location','CitiesService',
    function ($scope, TripService, authorization, auth, baseServiceUrl, notifier, $http, $location, CitiesService) {
        $scope.trips = TripService.getPublicTrips();
        $scope.isAuthorized = auth.isAuthenticated().$$state ? false : true;
        $scope.createTrip = createNewTrip;
        $scope.cities = CitiesService.getCities();

        function createNewTrip(trip) {
            $http.post(baseServiceUrl + '/api/trips', trip, {
                headers: authorization.getAuthorizationHeader()
            }).success(function () {
                notifier.success('Trip Created!');
                $location.path('/trips');
            }).error(function () {
                    notifier.error('Probably invalid date')
            })
        }
    }]);
