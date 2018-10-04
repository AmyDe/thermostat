describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat()
  })

  describe("temperature", function() {
    it(" should return new thermostat temperature as 20", function() {
      expect(thermostat.temperature()).toEqual(20);
    })
  })
  describe("Increase temperature", function() {
    it("should increase the temperature of the thermostat by given amount", function() {
      thermostat.increase(3);
      expect(thermostat.temperature()).toEqual(23);
    })
  })
  describe("Decrease temperature", function() {
    it("should decrease the temperature of the thermostat by given amount", function() {
      thermostat.decrease(10);
      expect(thermostat.temperature()).toEqual(10);
    })
  })

  describe("Min temperature", function() {
    it("should not let temperature go below 10", function() {
      thermostat.decrease(11);
      expect(thermostat.temperature()).toEqual(10);
    })
  })
  describe("Max power-save temperature", function() {
    it("should limit temperature to 25 in powersaving mode is on", function(){
      thermostat.increase(10);
      expect(thermostat.temperature()).toEqual(25);
    })
  })
  describe("Power save mode should default to on", function() {
    it("should have power save turned on by default", function() {
      expect(thermostat._powersave).toEqual(true);
    })
  })
  describe("Power save off", function() {
    it("should turn power save mode off and allow temps up to 32 to be set", function() {
      thermostat.powersaveOff();
      thermostat.increase(100);
      expect(thermostat._powersave).toEqual(false);
      expect(thermostat.temperature()).toEqual(32);
    })
  })
  describe("Power save on", function() {
    it("should turn powersave mode on when off", function() {
      thermostat.powersaveOff();
      thermostat.powersaveOn();
      expect(thermostat._powersave).toEqual(true);
    })
  })
  describe("Reset temperature", function() {
    it("should make the temperature the default temp (20)", function() {
      thermostat.increase(5);
      thermostat.resetTemp();
      expect(thermostat.temperature()).toEqual(20);
    })
  })
  describe("energyUsage", function() {
    it("should return the energy usage based on current temperature", function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
      thermostat.decrease(3);
      expect(thermostat.energyUsage()).toEqual("low-usage");
      thermostat.increase(8)
      expect(thermostat.energyUsage()).toEqual("high-usage");
    })
  })
})
