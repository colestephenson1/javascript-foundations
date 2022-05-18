
class Vampire {
  constructor(name, pet) {
this.name = name;
this.thirsty = true;
this.ouncesDrank = 0;
this.pet = pet
if (this.pet === undefined) {
  this.pet = 'bat'
};
}; drink() {
  this.ouncesDrank += 10
  this.thirsty = false
  if (this.ouncesDrank >= 50) {
    this.ouncesDrank = 50
    return `I\'m too full to drink anymore!`
  };
};
};





module.exports = Vampire;
