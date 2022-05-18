class Pirate {
  constructor(name, job, isCursed) {
    this.name = name;
    this.job = job;
    this.cursed = isCursed;
    this.booty = 0;
    if (this.job === undefined) {
      this.job = 'scallywag'
    } else if (this.cursed === undefined) {
      this.cursed = false;
    }
  } robShip() {
    if (this.booty === 500) {
      this.cursed = true
      return 'ARG! I\'ve been cursed!'
    } else {
      this.booty += 100
    return 'YAARRR!'
  }
  }
}






module.exports = Pirate;
