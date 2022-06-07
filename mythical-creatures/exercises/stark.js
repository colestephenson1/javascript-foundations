const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(name) {
this.name = name.name;
this.location = name.area || 'Winterfell';
this.safe = false;
};
  sayHouseWords() {
    if (this.safe === true) {
      return 'The North Remembers';
    } else {
    return 'Winter is Coming';
  };
};
  callDirewolf(name, home) {
    var calledWolf = new Direwolf(name, home);
    calledWolf.home = this.location;
    calledWolf.protect(this);
    return calledWolf;
  };
};

module.exports = Stark;
