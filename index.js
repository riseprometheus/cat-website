var express = require('express');
var app = express();
const path = require('path');

 app.get("/status", function (req, res){
     res.end("Server is up and running")
 })

 app.get('/aine', function (req, res) {
    res.sendFile('public/assets/aine.jpg',{root: __dirname} );
 })
 app.get('/heimdall', function (req, res) {
    res.sendFile('public/assets/heimdall.jpg',{root: __dirname} );
 })


// default URL for website

app.use(express.static(__dirname+'/public'));

app.use('/', function(req,res){
    res.sendFile(path.join('html/index.html'), {root: __dirname })
    //__dirname : It will resolve to your project folder.
});

 var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })