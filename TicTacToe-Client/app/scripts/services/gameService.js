'use strict';

angular.module('ticTacToeClientApp')
    .factory('gameService', function ($http, $q, baseUrl, authorization) {
        var gameServiceFunctions = {};

        var _createGame = function () {
            var deferred = $q.defer();

            $http.post(baseUrl + '/api/games/create', '',{
                headers: authorization.getAuthorizationHeader()
            })
                .success(function (response) {
                    localStorage.setItem('gameId', JSON.parse(response));
                    deferred.resolve(response);
                }).error(function (err, status) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        var _sendMove = function (moveData) {
            var deferred = $q.defer();
            moveData.GameId = localStorage.getItem('gameId');

            $http.post(baseUrl + '/api/games/play', moveData,{
                headers: authorization.getAuthorizationHeader()
            })
                .success(function (response) {
                    deferred.resolve(response);
                }).error(function (err, status) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        var _joinGame = function () {
            var deferred = $q.defer();

            $http.post(baseUrl + '/api/games/join', '',{
                headers: authorization.getAuthorizationHeader()
            })
                .success(function (response) {
                    localStorage.setItem('gameId', JSON.parse(response));
                    deferred.resolve(response);
                }).error(function (err, status) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        var _gameStatus = function () {
            var deferred = $q.defer();

            $http.get(baseUrl + '/api/games/status?gameId=' + localStorage.getItem('gameId'),{
                headers: authorization.getAuthorizationHeader()
            })
                .success(function (response) {
                    deferred.resolve(response);
                }).error(function (err, status) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        gameServiceFunctions.createGame = _createGame;
        gameServiceFunctions.sendMove = _sendMove;
        gameServiceFunctions.joinGame = _joinGame;
        gameServiceFunctions.gameStatus = _gameStatus;

        return gameServiceFunctions;
    });