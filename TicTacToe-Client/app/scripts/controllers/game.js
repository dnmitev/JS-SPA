'use strict';

angular.module('ticTacToeClientApp')
  .controller('GameCtrl', function ($scope, gameService) {
        $scope.gameStarted = false;
        $scope.showBoard = false;
        $scope.successfulMove = false;
        $scope.message = "";

        $scope.gameMove = {};

        $scope.gameboard = {
            rowOne: "",
            rowTwo: "",
            rowThree: "",
        };


        $scope.createGame = function createGameFunction() {
            gameService.createGame()
                .then(function (response) {
                    $scope.gameStarted = true;
                    $scope.showBoard = true;
                    $scope.status();
                }, function (err) {
                    alert('Create game: ' + err.Message);
                });
        };

        $scope.makeMove = function makeMoveFunction() {
            gameService.sendMove($scope.gameMove)
                .then(function (response) {
                    $scope.successfulMove = true;
                    $scope.status();
                    $scope.message = "Successful move";
                }, function (response) {
                    $scope.message = "Move Failed:" + response.Message;
                });
        };

        $scope.joinGame = function joinGameFunction() {
            gameService.joinGame()
                .then(function (response) {
                    $scope.gameStarted = true;
                    $scope.showBoard = true;
                    $scope.status();
                }, function (err) {
                    alert('Join game: ' + err.Message);
                });
        };

        $scope.status = function updateStatus() {
            gameService.gameStatus()
                .then(function (response) {
                    $scope.gameboard = {
                        rowOne: "",
                        rowTwo: "",
                        rowThree: ""
                    };

                    $scope.gameboard.rowOne += response.Board[0];
                    $scope.gameboard.rowOne += response.Board[1];
                    $scope.gameboard.rowOne += response.Board[2];

                    $scope.gameboard.rowTwo += response.Board[3];
                    $scope.gameboard.rowTwo += response.Board[4];
                    $scope.gameboard.rowTwo += response.Board[5];

                    $scope.gameboard.rowThree += response.Board[6];
                    $scope.gameboard.rowThree += response.Board[7];
                    $scope.gameboard.rowThree += response.Board[8];
                }, function (err) {
                    alert('Status: ' + err.Message);
                })};
  });
