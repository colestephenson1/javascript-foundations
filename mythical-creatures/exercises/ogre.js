class Ogre {
  constructor(name) {
this.name = name.name;
this.home = name.abode || 'Swamp';
this.swings = 0

  }
  encounter(human) {
    human.encounterCounter++
    if (human.noticesOgre() === true) {
      this.swingAt(human)
    }
  }
  swingAt(human) {
    this.swings++
    }
  };

module.exports = Ogre;
