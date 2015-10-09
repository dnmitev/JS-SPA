'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies', 'ngSanitize', 'pascalprecht.translate']).
    config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
        $routeProvider
            .when('/register', {
                templateUrl: 'views/partials/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/partial1', {
                templateUrl: 'views/partials/partial1.html',
                controller: 'MyCtrl1'
            })
            .when('/partial2', {
                templateUrl: 'views/partials/partial2.html',
                controller: 'MyCtrl2'
            })
            .otherwise({ redirectTo: '/partial1' });
        
        $translateProvider.useStaticFilesLoader({
            prefix: 'languages/',
            suffix: '.json'
        });
        
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
                
        $translateProvider.preferredLanguage('bg');
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://localhost:23610');