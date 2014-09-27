'use strict';

angular.module('ticTacToeClientApp')
    .factory('identity', ['$cookieStore', function ($cookieStore) {
    var _cookieStorageUserKey,
        _currentUser;

    _cookieStorageUserKey = 'currentApplicationUser';

    return {
        getCurrentUser: function () {
            var savedUser = $cookieStore.get(_cookieStorageUserKey);
            if (savedUser) {
                return savedUser;
            }

            return _currentUser;
        },
        setCurrentUser: function (user) {
            if (user) {
                $cookieStore.put(_cookieStorageUserKey, user);
            } else {
                $cookieStore.remove(_cookieStorageUserKey);
            }

            _currentUser = user;
        },
        isAuthenticated: function () {
            return !!this.getCurrentUser();
        }
    };
}]);
