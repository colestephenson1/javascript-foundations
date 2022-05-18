class Hobbit {
  constructor(name,) {
  this.name = name
  this.age = 0;
  this.adult = false;
  this.old = false;
}
celebrateBirthday() {
  this.age++
}
timeTravel(num, hobbit) {
  for (var i = 0; i < num; i++) {
    hobbit.celebrateBirthday()
    if (32 < this.age < 101) {
      this.adult = true
    } if (this.age >= 101) {
      this.old = true
    }
  };
};
};






module.exports = Hobbit;
