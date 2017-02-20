(function(dataAccess){
    
    var vehicleData = require('./vehicledata.json');
    var q = require('q');

    dataAccess.getVehicleModelsByMakeId = function(makeId) {
        var defer = q.defer();
            for (var i = 0; i < vehicleData.length; i++){
                if(vehicleData[i]['makeId'] == makeId){
                    defer.resolve(vehicleData[i]);
                }
            }
            defer.reject(null);
            return defer.promise;
    }
    
})(module.exports);
