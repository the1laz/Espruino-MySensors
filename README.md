# Espruino-MySensors
Module for devices running Espruino to connect to other software using Mysensors api.

See the MySensors API documentation: https://www.mysensors.org/download/sensor_api_20

**Usage:**
~~~~
var mys = require("MySensors").create(nodeid);
~~~~
Where serial is some sort of serial connection (physical serial, usb, socket. Something with a write command and a data event).

Nodeid is the MySensors id for the device. Use 255 for automatic address assignment (not supported yet though).

**Functions:**
~~~~
setMqttGW(mqtt,pubtopic,subtopic) - Set up gateway using mqtt. mqtt is a client connection object, pubtopic and subtopic are the prefixes for the mqtt topic.

setSerialGW(serial) - Set up gateway using a serial or socket connection.

present(sensorid,sensortype) - Send presentation message to controller for an attached sensor

newMessage(sensor,subtype)  -  Create new message object

send(message) - Send message to controller
~~~~
**Events:**
~~~~
on('presentation') - fires when controller requests presentation. Manually fire using mys.emit('presentation')

on('receive',function(msg){}) - fires when set/req message received
~~~~
