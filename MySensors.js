/* Copyright (c) 2016 Steven Lazidis. See the file LICENSE for copying permission. */
/*
MySensors module for Espruino
*/


function MySensors(c,i) {
  if(isNaN(i) || i > 255) {
    this.nodeId = 255;
  } else {
    this.nodeId = i;
  }
  this.connection = c;
  this.connection.on('data',this.parse.bind(this));
}

MySensors.prototype.connection = {};

MySensors.prototype.nodeId = {};

MySensors.prototype.fragment = "";


MySensors.prototype.parse = function(x) {
  print(x);
  var msgs = x.split("\n");
  msgs[0] = this.fragment + msgs[0];
  this.fragment = msgs.pop();
  for(var i=0; i < msgs.length;i++) {
    var parts = msgs[i].split(";");
    parts[5] = parts.slice(5).join(";");
    this.handler(parts.slice(0,6));
  }
};


MySensors.prototype.present = function(sensor,type) {
  var msg = this.newMessage(sensor,type);
  msg.payload = "2.0";
  msg.messageType = 0;
  this.send(msg);
};

MySensors.prototype.newMessage = function(sensor,type) {
  return {
    nodeId:this.nodeId,
    childSensorId:sensor,
    messageType:1,
    ack:0,
    subType:type,
    payload:""
  }
};


MySensors.prototype.send = function(msg) {
  var output = msg.nodeId+";"+msg.childSensorId+";"+msg.messageType+";"+msg.ack+";"+msg.subType+";"+JSON.stringify(msg.payload)+"\n";
  this.connection.write(output);
};

MySensors.prototype.handler = function(y) {
  if(y[0] == JSON.stringify(this.nodeId)) {
    switch (y[2]) {
      case "1":
      case "2":
        var msg = this.newMessage(y[1],y[4]);
        msg.nodeId = y[0];
        msg.ack = y[3];
        msg.messageType = y[2];
        msg.payload = y[5];
        this.emit('receive',msg);
        break;
      case "3":
        switch(y[4]) {
          case "19":
            this.emit('presentation');
            break;
          case "4":
            var newId = JSON.parse(y[5]);
            if (!isNAN(newId)) {
              this.nodeId = newId;
              this.emit('presentation');
            }
            break;
          default:
            console.log("message subtype not implemented:"+y);
        }
        break;
      default:
        console.log("message type not implemented:"+y);
    }
  }
};



exports.connect = function (c,i) {
  return new MySensors(c,i);
};
