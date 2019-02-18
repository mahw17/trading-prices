var express = require('express');
// Import the library:
// var cors = require('cors');

var app = express();

// Then use it before your routes are set up:
// app.use(cors());

// var app = require('express')();
// var cors = require('cors');
// app.use(cors());
// app.options('*', cors());
var http = require('http').Server(app);
const io = require('socket.io')(http);
io.origins('*:*') // for latest version
const stock = require("./stock.js");


var minValue = {
    name: "Minvärde",
    current: 18,
};

var maxValue = {
    name: "Maxvärde",
    current: 22,
};

var rates = [minValue, maxValue];


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

setInterval(function () {
    stock.getValue(rates);
    io.emit("stocks", rates);
}, 5000);


http.listen(4500, function() {
   console.log('listening on *:4500');
});
