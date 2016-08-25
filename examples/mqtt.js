var interval = {};var server = "192.168.1.12";var led = false;
var pubtopic = "mygateway1-out";var subtopic = "mygateway1-in";

var mys = require("MySensors").create(3);

mys.on('presentation',function() {
  mys.present(0,3);
  console.log('presenting!');
});


mys.on('receive', function(msg) {
  console.log(msg);
  if(msg.childSensorId === "0" && msg.messageType === "1") {
    led = (msg.payload == "1");
    console.log("LED is now " + (led ? "on" : "off"));
  }
});

var mqtt = require("MQTT").create(server);

mqtt.on("disconnected", function(){
    console.log("disconnected");
    mys.disconnectGW();
    clearInterval(interval);
    mqtt.connect();
});

mqtt.on('connected', function() {
  console.log('client connected');

  mys.setMqttGW(mqtt,pubtopic,subtopic);
  interval = setInterval(function() {
    var msg = mys.newMessage(0,2);
    msg.payload = led ? 1 : 0;
    mys.send(msg);
    console.log("LED is  " + (led ? "on" : "off"));
  },10000);

});

E.on('init',function() {
  mqtt.connect();

});
