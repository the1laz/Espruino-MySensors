var timeout = {};
var client = {};
var mys = {};

var led = false;

function connect() {
  timeout = setInterval(function() {
    client = require("net").connect({host: "192.168.1.35", port: 5004}, function() {

      clearInterval(timeout);

      mys = require("MySensors").connect(client,3);

      mys.on('presentation',function() {
        mys.present(0,3);
        console.log('presenting!');
      });
      console.log('client connected');
      mys.emit('presentation');
      mys.on('receive', function(msg) {
        if(msg.childSensorId === "0" && msg.messageType === "1") {
          led = (msg.payload == "1");
          console.log("LED is now " + (led ? "on" : "off"));
        }
      });

      client.on('end', function() {
        console.log('client disconnected');
        connect();
      });
    });
  },5000);
}


connect();

setInterval(function() {
  var msg = mys.newMessage(0,2);
  msg.payload = led ? 1 : 0;
  mys.send(msg);
  console.log("LED is  " + (led ? "on" : "off"));
},10000);
