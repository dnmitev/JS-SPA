'use strict';

app.factory('certificatesService', ['$resource', function ($resource) {
    var certificates = $resource('data/certificates.json');

    return {
        getCertificates: function () {
            return certificates.get();
        }
    }
}]);
