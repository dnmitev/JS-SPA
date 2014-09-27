'use strict';

angular.module('ticTacToeClientApp')
    .factory('auth', ['$http', '$q', 'identity', 'authorization', 'baseUrl', function ($http, $q, identity, authorization, baseUrl) {
        var _userApi = baseUrl + '/api/account';

        return {
            signup: function (user) {
                var deferred = $q.defer();

                $http.post(_userApi + '/register', user, {
                    'Content-Type': 'application/json'
                }).success(function () {
                    deferred.resolve();
                }, function (response) {
                    deferred.reject(response);
                });

                return deferred.promise;
            },
            login: function (user) {
                var deferred = $q.defer();

                $http.post(_userApi + '/login',
                        'username=' + user.username + '&password=' + user.password + '&grant_type=password', {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).success(function (response) {
                        if (response["access_token"]) {
                            identity.setCurrentUser(response);
                            deferred.resolve(true);
                        } else {
                            deferred.resolve(false);
                        }
                    });

                return deferred.promise;
            },
            logout: function () {
                var deferred = $q.defer();

                var headers = authorization.getAuthorizationHeader();
                $http.post(_userApi + '/logout', {}, {
                    headers: headers,
                    'content-type': 'application/json'
                })
                    .success(function () {
                        identity.setCurrentUser(undefined);
                        deferred.resolve();
                    });

                return deferred.promise;
            },
            isAuthenticated: function () {
                if (identity.isAuthenticated()) {
                    return true;
                } else {
                    return $q.reject('Not Authorized!');
                }
            }
        }
    }]);
