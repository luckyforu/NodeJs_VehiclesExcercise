var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var vehicleService = require('./Business/businessService');

var port = process.env.PORT || 3030;
var server = app.listen(port, function () {
    console.log('server is running fine at ' + port);
});

app.get('/', function (req, res) {
    res.send("Node server for fetching vehicle data");
});

app.get('/vehicle/make/:makeId', function(req, res){
    var makeId = parseInt(req.params.makeId);
    //Avoiding other makes
    if(makeId != 1 && makeId != 2){
        res.send(null);
    }
    //Using business service
    var promise = vehicleService.getVehicleModelsByMakeId(makeId);
    promise.then(function (result) {
        res.send(result);
    }, function (error) {
        res.send("Not able to get models for make id " + makeId + " error: " + error);
    });
});


// app.get('/data/:startPage/:endPage/:pageSize', function(req, res){
//       var temp = [];
//     if(req.params.startPage == 5) {
//       for (var i = 40; i < 80; i++){
//         temp[i] = TableData[i];
//        }
//         res.send(temp);
//     } else {
//       for (var i = 0; i < 100; i++){
//         temp[i] = TableData[i];
//        }
//         res.send(temp);
//     }
// });