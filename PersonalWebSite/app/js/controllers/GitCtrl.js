'use strict';

app.controller('GitCtrl',['$scope','gitService', function ($scope,gitService) {
    var repos = gitService.getGitRepos(),
        owner = gitService.getOwnerData();

    $scope.repos = repos;
    $scope.owner = owner;

    $('#view-container').addClass('animated bounceIn');
}]);
