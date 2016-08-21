var messageType = {
  "S_DOOR": {
    "value": 0
  },
  "S_MOTION": {
    "value": 1
  },
  "S_SMOKE": {
    "value": 2
  },
  "S_LIGHT": {
    "value": 3
  },
  "S_BINARY": {
    "value": 3
  },
  "S_DIMMER": {
    "value": 4
  },
  "S_COVER": {
    "value": 5
  },
  "S_TEMP": {
    "value": 6
  },
  "S_HUM": {
    "value": 7
  },
  "S_BARO": {
    "value": 8
  },
  "S_WIND": {
    "value": 9
  },
  "S_RAIN": {
    "value": 10
  },
  "S_UV": {
    "value": 11
  },
  "S_WEIGHT": {
    "value": 12
  },
  "S_POWER": {
    "value": 13
  },
  "S_HEATER": {
    "value": 14
  },
  "S_DISTANCE": {
    "value": 15
  },
  "S_LIGHT_LEVEL": {
    "value": 16
  },
  "S_ARDUINO_NODE": {
    "value": 17
  },
  "S_ARDUINO_REPEATER_NODE": {
    "value": 18
  },
  "S_LOCK": {
    "value": 19
  },
  "S_IR": {
    "value": 20
  },
  "S_WATER": {
    "value": 21
  },
  "S_AIR_QUALITY": {
    "value": 22
  },
  "S_CUSTOM": {
    "value": 23
  },
  "S_DUST": {
    "value": 24
  },
  "S_SCENE_CONTROLLER": {
    "value": 25
  },
  "S_RGB_LIGHT": {
    "value": 26
  },
  "S_RGBW_LIGHT": {
    "value": 27
  },
  "S_COLOR_SENSOR": {
    "value": 28
  },
  "S_HVAC": {
    "value": 29
  },
  "S_MULTIMETER": {
    "value": 30
  },
  "S_SPRINKLER": {
    "value": 31
  },
  "S_WATER_LEAK": {
    "value": 32
  },
  "S_SOUND": {
    "value": 33
  },
  "S_VIBRATION": {
    "value": 34
  },
  "S_MOISTURE": {
    "value": 35
  },
  "S_INFO": {
    "value": 36
  },
  "S_GAS": {
    "value": 37
  },
  "S_GPS": {
    "value": 38
  },
  "S_WATER_QUALITY": {
    "value": 39
  }
};

var subType = {
  "V_TEMP": {
    "value": 0
  },
  "V_HUM": {
    "value": 1
  },
  "V_STATUS": {
    "value": 2
  },
  "V_LIGHT": {
    "value": 2
  },
  "V_PERCENTAGE": {
    "value": 3
  },
  "V_DIMMER": {
    "value": 3
  },
  "V_PRESSURE": {
    "value": 4
  },
  "V_FORECAST": {
    "value": 5
  },
  "V_RAIN": {
    "value": 6
  },
  "V_RAINRATE": {
    "value": 7
  },
  "V_WIND": {
    "value": 8
  },
  "V_GUST": {
    "value": 9
  },
  "V_DIRECTION": {
    "value": 10
  },
  "V_UV": {
    "value": 11
  },
  "V_WEIGHT": {
    "value": 12
  },
  "V_DISTANCE": {
    "value": 13
  },
  "V_IMPEDANCE": {
    "value": 14
  },
  "V_ARMED": {
    "value": 15
  },
  "V_TRIPPED": {
    "value": 16
  },
  "V_WATT": {
    "value": 17
  },
  "V_KWH": {
    "value": 18
  },
  "V_SCENE_ON": {
    "value": 19
  },
  "V_SCENE_OFF": {
    "value": 20
  },
  "V_HVAC_FLOW_STATE": {
    "value": 21
  },
  "V_HVAC_SPEED": {
    "value": 22
  },
  "V_LIGHT_LEVEL": {
    "value": 23
  },
  "V_VAR1": {
    "value": 24
  },
  "V_VAR2": {
    "value": 25
  },
  "V_VAR3": {
    "value": 26
  },
  "V_VAR4": {
    "value": 27
  },
  "V_VAR5": {
    "value": 28
  },
  "V_UP": {
    "value": 29
  },
  "V_DOWN": {
    "value": 30
  },
  "V_STOP": {
    "value": 31
  },
  "V_IR_SEND": {
    "value": 32
  },
  "V_IR_RECEIVE": {
    "value": 33
  },
  "V_FLOW": {
    "value": 34
  },
  "V_VOLUME": {
    "value": 35
  },
  "V_LOCK_STATUS": {
    "value": 36
  },
  "V_LEVEL": {
    "value": 37
  },
  "V_VOLTAGE": {
    "value": 38
  },
  "V_CURRENT": {
    "value": 39
  },
  "V_RGB": {
    "value": 40
  },
  "V_RGBW": {
    "value": 41
  },
  "V_ID": {
    "value": 42
  },
  "V_UNIT_PREFIX": {
    "value": 43
  },
  "V_HVAC_SETPOINT_COOL": {
    "value": 44
  },
  "V_HVAC_SETPOINT_HEAT": {
    "value": 45
  },
  "V_HVAC_FLOW_MODE": {
    "value": 46
  },
  "V_TEXT": {
    "value": 47
  },
  "V_CUSTOM": {
    "value": 48
  },
  "V_POSITION": {
    "value": 49
  },
  "V_IR_RECORD": {
    "value": 50
  },
  "V_PH": {
    "value": 51
  },
  "V_ORP": {
    "value": 52
  },
  "V_EC": {
    "value": 53
  },
  "V_VAR": {
    "value": 54
  },
  "V_VA": {
    "value": 55
  },
  "V_POWER_FACTOR": {
    "value": 56
  }
};

var internal = {
  "I_BATTERY_LEVEL": {
    "value": 0
  },
  "I_TIME": {
    "value": 1
  },
  "I_VERSION": {
    "value": 2
  },
  "I_ID_REQUEST": {
    "value": 3
  },
  "I_ID_RESPONSE": {
    "value": 4
  },
  "I_INCLUSION_MODE": {
    "value": 5
  },
  "I_CONFIG": {
    "value": 6
  },
  "I_FIND_PARENT": {
    "value": 7
  },
  "I_FIND_PARENT_RESPONSE": {
    "value": 8
  },
  "I_LOG_MESSAGE": {
    "value": 9
  },
  "I_CHILDREN": {
    "value": 10
  },
  "I_SKETCH_NAME": {
    "value": 11
  },
  "I_SKETCH_VERSION": {
    "value": 12
  },
  "I_REBOOT": {
    "value": 13
  },
  "I_GATEWAY_READY": {
    "value": 14
  },
  "I_REQUEST_SIGNING": {
    "value": 15
  },
  "I_GET_NONCE": {
    "value": 16
  },
  "I_GET_NONCE_RESPONSE": {
    "value": 17
  },
  "I_HEARTBEAT": {
    "value": 18
  },
  "I_PRESENTATION": {
    "value": 19
  },
  "I_DISCOVER": {
    "value": 20
  },
  "I_DISCOVER_RESPONSE": {
    "value": 21
  },
  "I_HEARTBEAT_RESPONSE": {
    "value": 22
  },
  "I_LOCKED": {
    "value": 23
  },
  "I_PING": {
    "value": 24
  },
  "I_PONG": {
    "value": 25
  },
  "I_REGISTRATION_REQUEST": {
    "value": 26
  },
  "I_REGISTRATION_RESPONSE": {
    "value": 27
  },
  "I_DEBUG": {
    "value": 28
  }
};
exports = {
  messageType: messageType,
  subType: subType,
  internal: internal
};
