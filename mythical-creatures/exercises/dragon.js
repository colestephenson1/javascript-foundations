class Dragon {
constructor(name, rider, isHungry) {
this.name = name;
this.rider = rider;
this.meals = 0;
this.hungry = isHungry
if (this.hungry === undefined) {
  this.hungry = true
};

} greet() {
 return `Hi, ${this.rider}!`

} eat() {
  this.meals++;
  if (this.meals < 3) {
    this.hungry = true
  } else {
    this.hungry = false
    return this.hungry
  };
};
};



module.exports = Dragon;
