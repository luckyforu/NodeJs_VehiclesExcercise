(function(business){
    
    var dataAccess = require('../DataAccess/dataAccessService');
    var q = require('q');

    business.getVehicleModelsByMakeId = function(makeId) {
        var defer = q.defer();
        //Using Data Access service
        var promise = dataAccess.getVehicleModelsByMakeId(makeId);
        promise.then(function (result) {
            defer.resolve(result);
        }, function (error) {
            defer.reject("Not able to get models for make id " + makeId + " error: " + error);
        });
        return defer.promise;
    }
    
})(module.exports);

//https://secure-dawn-39718.herokuapp.com/