'use strict';

app.factory('gitService', ['$resource', function ($resource) {
    var repos = $resource('https://api.github.com/users/dnmitev/repos'),
        owner = $resource('https://api.github.com/users/dnmitev');

    return {
        getGitRepos: function () {
            return repos.query();
        },
        getOwnerData: function () {
            return owner.get();
        }
    }
}]);
