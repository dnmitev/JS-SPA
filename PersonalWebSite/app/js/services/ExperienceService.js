'use strict';

app.factory('experienceService', ['$resource', function ($resource) {
    var experience = $resource('data/experience.json');

    return {
        getExperience: function () {
            return experience.get();
        }
    }
}]);
