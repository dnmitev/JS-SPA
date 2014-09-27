'use strict';

angular.module('ticTacToeClientApp')
    .controller('SignUpCtrl',['$scope','$location','notifier','auth', function ($scope, $location, notifier, auth) {
        $scope.signup = function (user) {
            auth.signup(user)
                .then(function (success) {
                    notifier.success('Registration successful!');
                    $location.path('#/');
                })
        }
    }]);