var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

var port = process.env.PORT || 3030;
var server = app.listen(port, function () {
    console.log('server is running fine at ' + port);
});

app.get('/', function (req, res) {
    res.send("Default route");
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