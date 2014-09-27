'use strict';

angular.module('ticTacToeClientApp')
    .controller('LoginCtrl', ['$scope', '$location', 'notifier', 'identity', 'auth', function ($scope, $location, notifier, identity, auth) {
    $scope.identity = identity;

    $scope.login = function (user, loginForm) {
        if (loginForm.$valid) {
            auth.login(user, loginForm)
                .then(function (success) {
                    if (success) {
                        notifier.success('Successful login');
                    } else {
                        notifier.error('Username/password invalid')
                    }
                })
        } else {
            notifier.error('Username and password are required fields');
        }
    };

    $scope.logout = function () {
        auth.logout().then(function () {
            notifier.success('Successful logout!');
            if ($scope.user) {
                debugger;
                $scope.user.email = '';
                $scope.user.username = '';
                $scope.user.password = '';
            }

            $scope.loginForm.$setPristine();
            $location.path('/');
        })
    }
}]);
