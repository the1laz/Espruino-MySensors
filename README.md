# Espruino-MySensors
Module for devices running Espruino to connect to other software using Mysensors api.

Usage:

var mys = require("MySensors").connect(serial,nodeid);

Where serial is some sort of serial connection (physical serial, usb, socket. Something with a write command and a data event).

Nodeid is the MySensors id for the device. Use 255 for automatic address assignment (not supported yet though).

functions:

present(sensorid,sensortype)

send(message)

message(nodeId,sensor,type)  -  (Create messages e.g. new mys.message(n,s,t))


events:

on('presentation')

on('receive')
