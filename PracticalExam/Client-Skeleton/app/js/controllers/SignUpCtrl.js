'use strict';

app.controller('SignUpCtrl', ['$scope', '$location', 'auth', 'notifier', function ($scope, $location, auth, notifier) {
    $scope.emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $scope.signup = function (user) {
        auth.signup(user).then(function () {
            notifier.success('Registration successful!');
            $location.path('/');
        }, function (response) {
                if (response.modelState) {
                    notifier.error(response.modelState['']);
                } else if (response.message) {
                    notifier.error(response.message);
                } else {
                    notifier.error('Something strange happened! Please check your registration data.')
                }
        })
    };
}]);