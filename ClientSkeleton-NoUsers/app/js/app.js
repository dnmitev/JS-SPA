'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/myctrl', {
                templateUrl: 'views/partials/myctrl.html',
                controller: 'MyCtrl'
            })
            .when('/myctrl2', {
                templateUrl: 'views/partials/myctrl2.html',
                controller: 'MyCtrl2'
            })
            .otherwise({
                redirectTo: '/myctrl'
            })
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://spa2014.bgcoder.com');