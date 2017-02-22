(function(dataAccess){
    
    var vehicleData = require('./vehicledata.json');
    var q = require('q');
    
    dataAccess.getVehicleMakes = function() {
        var defer = q.defer();
        var result = [];
            for (var i = 0; i < vehicleData.length; i++){
                var temp = {};
                temp["makeId"] = vehicleData[i]["makeId"];
                temp["makeName"] = vehicleData[i]["makeName"];
                result.push(temp);
            }
            defer.resolve(result);
            return defer.promise;
    }
    
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
