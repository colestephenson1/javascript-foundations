class Being {
  constructor(name, species) {
      this.isAlive = true;
      this.name = name;
      this.species = species;
      this.credits = 0;
  };
  updateCredits(cash) {
    this.credits += cash;
  };
};

module.exports = Being;
