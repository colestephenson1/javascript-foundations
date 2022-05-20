class Magician {
  constructor(name) {
this.name = `The Great ${name.name}`;
this.assistant = name.assistant;
this.favoriteAccessory = name.clothing || 'top hat';
this.confidencePercentage = 10;
  } performIncantation(spell) {
    return `${spell.toUpperCase()}!`;
  } performTrick() {
    this.confidencePercentage += 10;
if (this.favoriteAccessory === 'top hat') {
  return 'PULL RABBIT FROM TOP HAT'
} else {
  return 'PULL DOVE FROM SLEEVE'
}
  } performShowStopper() {
    if (confidencePercentage === 100) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no, this trick is not ready!'
}
  }
}





module.exports = Magician;
