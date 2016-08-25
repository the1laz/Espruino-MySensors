var interval = {};var socket = {};var led = false;

// Create MySensors object
var mys = require("MySensors").create(3);

// Define how it presents
mys.on('presentation',function() {
  mys.present(0,3);
  console.log('presenting!');
});

// Define how to react to messages
mys.on('receive', function(msg) {
  if(msg.childSensorId === "0" && msg.messageType === "1") {
    led = (msg.payload == "1");
    console.log("LED is now " + (led ? "on" : "off"));
  }
});

// Connecting to socket, handling disconnects, passing socket to MySensors object
function connect() {
  interval = setInterval(function() {
    socket = require("net").connect({host: "192.168.1.35", port: 5003}, function() {

      console.log('client connected');

      clearInterval(interval);

      interval = setInterval(function() {
        var msg = mys.newMessage(0,2);
        msg.payload = led ? 1 : 0;
        mys.send(msg);
        console.log("LED is  " + (led ? "on" : "off"));
      },10000);

      mys.setSerialGW(socket);

      socket.on('end', function() {
        mys.disconnectGW();
        clearInterval(interval);
        console.log('client disconnected');
        connect();
      });
    });
  },5000);
}

E.on('init',function() {
  connect();
});
