'use strict';

var app = angular.module('tripExchangeApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/register', {
                templateUrl: 'views/partials/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/trips', {
                templateUrl: 'views/partials/trips.html',
                controller: 'TripsCtrl'
            })
            .when('/trips/create',{
                templateUrl: 'views/partials/create-new-trip.html',
                controller: 'TripsCtrl'
            })
            .when('/drivers/:id', {
                templateUrl: 'views/partials/driver-details.html',
                controller: 'DriversCtrl'
            })
            .when('/drivers', {
                templateUrl: 'views/partials/drivers.html',
                controller: 'DriversCtrl'
            })
            .when('/unauthorized',{
                template: '<div unauthorized-directive></div>'
            })
            .otherwise({
                redirectTo: '/',
                templateUrl: 'views/partials/home.html',
                controller: 'HomeCtrl'
            });
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://spa2014.bgcoder.com');