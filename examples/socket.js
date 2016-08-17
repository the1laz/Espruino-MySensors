var timeout = {};
var client = {};
var mys = {};

function connect() {
  timeout = setInterval(function() {
    client = require("net").connect({host: "192.168.1.2", port: 5003}, function() {
      clearInterval(timeout);
      mys = require("http://localhost:8080/MySensors.js").connect(client,2);
      mys.on('presentation',function() {
        mys.present(0,3);
      });
      console.log('client connected');
      client.on('data', function(data) {
      });
      client.on('end', function() {
        console.log('client disconnected');
        connect();
      });
    });
  },5000);
}


connect();
