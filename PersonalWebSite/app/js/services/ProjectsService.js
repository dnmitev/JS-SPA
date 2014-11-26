'use strict';

app.factory('projectsService', ['$resource', function ($resource) {
    var projects = $resource('data/projects.json');

    return {
        getProjects: function () {
            return projects.get();
        }
    }
}]);
