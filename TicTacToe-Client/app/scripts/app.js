'use strict';

angular
    .module('ticTacToeClientApp', [
        'ngCookies',
        'ngResource',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/game', {
                templateUrl: '../views/game.html',
                controller: 'GameCtrl'
            })
            .when('/register', {
                templateUrl: 'views/signup.html',
                controller: 'SignUpCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .value('toastr', toastr)
    .constant('baseUrl', 'http://localhost:33257');
