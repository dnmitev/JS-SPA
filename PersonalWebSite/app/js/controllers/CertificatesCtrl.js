'use strict';

app.controller('CertificatesCtrl',['$scope','certificatesService', function ($scope,certificatesService) {
    var certificates = certificatesService.getCertificates();

    $scope.certificates = certificates;

    $('#view-container').addClass('animated bounceIn');
}]);

