'use strict';

app.filter('isMineFilter', function() {
    return function(isMine) {
        console.log(isMine);
        switch (isMine) {
            case true: return true; break;
            case false: return false; break;
        }
    }
});
