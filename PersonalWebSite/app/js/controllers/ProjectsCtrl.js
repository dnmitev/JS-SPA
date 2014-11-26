'use strict';

app.controller('ProjectsCtrl',['$scope','projectsService', function ($scope,projectsService) {
    var projects = projectsService.getProjects();

    $scope.projects = projects;

    $('#view-container').addClass('animated bounceIn');
}]);

