'use strict';

app.factory('educationService', ['$resource', function ($resource) {
    var education = $resource('data/education.json');

    return {
        getEducation: function () {
            return education.get();
        }
    }
}]);
