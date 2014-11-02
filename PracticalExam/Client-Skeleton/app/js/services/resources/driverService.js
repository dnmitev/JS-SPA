'use strict';

app.factory('DriverService',['$resource','authorization','baseServiceUrl','$routeParams',
    function ($resource, authorization, baseServiceUrl,$routeParams) {
        var headers,
            DriverService;

        headers = authorization.getAuthorizationHeader();

        DriverService = $resource(baseServiceUrl + '/api/drivers/:id', {id: '@id'}, {
            getDrivers : {
                method: 'GET',
                headers: headers,
                isArray: true
            },
            getDriverById : {
                method: 'GET',
                headers: headers,
                isArray: false
            }
        });

        return {
            getPublicDrivers: function () {
                return DriverService.getDrivers({});
            },
            getDriverById: function (id) {
                return DriverService.getDriverById({id: id});
            }
        };
    }]);
