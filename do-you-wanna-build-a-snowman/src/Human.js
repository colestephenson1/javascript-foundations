var Snowman = require("../src/Snowman");

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    };
  };
  gatherMaterials(material, increment) {
    this.materials[material] += increment;
  };
  buildASnowman() {
    var newSnowman = new Snowman(this.materials);
    return newSnowman;
  };
  placeMagicHat() {
    var newSnowman = this.buildASnowman();
    newSnowman.canWearMagicHat();
    if (newSnowman.magicHat) {
      return 'Woah, this snowman is coming to life!';
    }
      return 'I guess I didn\'t build it correctly.';
  };
};

module.exports = Human;
