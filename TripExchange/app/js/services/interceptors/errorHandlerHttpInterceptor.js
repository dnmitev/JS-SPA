'use strict';

app.factory('errorHandlerHttpInterceptor',['$q','errorHandler', function ($q, errorHandler) {
    return {
        'repsonseError': function (serverError) {
            errorHandler.processError(serverError.data);

            return $q.reject(serverError);
        }
    }
}]);
