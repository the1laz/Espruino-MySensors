var server = "192.168.1.2";
var pubtopic = "mygateway1-out";
var subtopic = "mygateway1-in";
var mys = {};
var led = false;

var mqtt = require("MQTT").create(server);

var client = {
  write: function(str) {
    var parts = str.split(";");
    parts[5] = parts.slice(5).join(";");
    var a = pubtopic+"/"+parts[0]+"/"+parts[1]+"/"+parts[2]+"/"+parts[3]+"/"+parts[4];
    mqtt.publish(a,parts[5].split("\n")[0]);
    console.log('send to mqtt');
  }
};


mqtt.on("connected", function(){
    mqtt.subscribe(subtopic+"/+/+/+/+/+");
});

mqtt.on("message", function(msg){
    var parts = msg.topic.split("/").slice(1);
    client.emit('data',parts.join(";")+";"+msg.message+"\n");
});

mqtt.on("disconnected", function(){
    console.log("disconnected");
    mqtt.connect();
});


E.on('init',function() {
  mqtt.connect();

  mys = require("MySensors").connect(client,3);

  mys.on('presentation',function() {
    mys.present(0,3);
    console.log('presenting!');
  });
  console.log('client connected');
  mys.emit('presentation');
  mys.on('receive', function(msg) {
    console.log(msg);
    if(msg.childSensorId === "0" && msg.messageType === "1") {
      led = (msg.payload == "1");
      console.log("LED is now " + (led ? "on" : "off"));
    }
  });

  setInterval(function() {
    var msg = mys.newMessage(0,2);
    msg.payload = led ? 1 : 0;
    mys.send(msg);
    console.log("LED is  " + (led ? "on" : "off"));
  },10000);

});
