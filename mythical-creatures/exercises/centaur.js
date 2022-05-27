class Centaur {
  constructor(name) {
this.name = name.name;
this.breed = name.type;
this.cranky = false;
this.standing = true;
this.layingDown = false;
this.crankyCount = 0;
}
shootBow() {
  this.crankyCount++
    if (this.crankyCount >= 3 || this.layingDown === true) {
      this.cranky = true
      return 'NO!'
  } else {
      return 'Twang!!!'
    }
}
run() {
  this.crankyCount++
    if (this.crankyCount >= 3 || this.layingDown === true) {
      this.cranky = true
      return 'NO!'
  } else {
    return 'Clop clop clop clop!!!'
  }
} sleep() {
  if (this.standing === true) {
    return 'NO!'
} else {
    this.cranky = false
    this.crankyCount = 0
    return 'ZZZZ'
  }
}
layDown() {
    this.standing = false
    this.layingDown = true
}
  standUp() {
    this.standing = true
    this.layingDown = false
}
  drinkPotion() {
    if (this.standing === true){
      this.cranky = false
    } else {
        return 'Not while I\'m laying down!'
      }
    }
  }
module.exports = Centaur;
