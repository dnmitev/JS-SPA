'use strict';

app.factory('errorHandler',['notifier', function (notifier) {
    return {
        processError: function (serverError) {
            if (serverError['error_description']) {
                notifier.error(serverError['error_description']);
            }

            if (serverError['message']) {
                notifier.error(serverError['message']);
            }

            if (serverError.modelState) {
               var modelStateErrors = serverError.modelState;

                for (var prop in modelStateErrors) {
                    var errorMessage = modelStateErrors[prop];
                    var trimmedName = prop.substr(prop.indexOf('.') + 1);

                    for (var i = 0; i < errorMessage.length; i += 1) {
                        var currentError = errorMessage[i];

                        notifier.error(trimmedName + ' : ' + currentError);
                    }
                }
            }
        }
    }
}]);
