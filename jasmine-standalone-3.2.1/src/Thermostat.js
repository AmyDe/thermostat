function Thermostat() {
  this._temperature = 20;
  this._powersave = true;
  MAX_TEMP = 32;
  MAX_PS_TEMP = 25;
  MIN_TEMP = 10;
  DEFAULT_TEMP = 20;
  LOW_MEDIUM_USE_LIMIT = 18;
  HIGH_MEDIUM_USE_LIMIT = 24;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.powersaveOff = function() {
  this._powersave = false;
}

Thermostat.prototype.powersaveOn = function() {
  this._powersave = true;
}

Thermostat.prototype.increase = function(degreesUp) {
  if (this._powersave == true && this._temperature + degreesUp > MAX_PS_TEMP) {
    this._temperature = MAX_PS_TEMP;
    return("Power saving mode on, max temperature 25 degrees");
  } else if (this._powersave == false && this._temperature + degreesUp > MAX_TEMP) {
    this._temperature = MAX_TEMP;
    return("Maximum temperature 35 degrees");
  } else {
    this._temperature += degreesUp;
  }
}

Thermostat.prototype.decrease = function(degreesDown) {
  if (this._temperature - degreesDown < MIN_TEMP) {
    this._temperature = MIN_TEMP;
    return("Minimum temperature 10 degrees");
  } else {
    this._temperature -= degreesDown;
  }
}

Thermostat.prototype.resetTemp = function() {
  this._temperature = DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function() {
  if(this._temperature < LOW_MEDIUM_USE_LIMIT) {
    return("low-usage");
  } else if (this._temperature > HIGH_MEDIUM_USE_LIMIT) {
    return("high-usage");
  } else {
    return("medium-usage");
  }
}
