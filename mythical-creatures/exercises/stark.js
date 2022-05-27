class Stark {
  constructor(name) {
this.name = name.name;
this.location = name.area || 'Winterfell';
this.safe = false;
  }
  sayHouseWords() {
    if (this.safe === true) {
      return 'The North Remembers'
    } else {
    return 'Winter is Coming'
  }
}
  callDirewolf(name, home) {
    var calledWolf = new Direwolf(name, 'Riverlands')
    return calledWolf
  }
}
module.exports = Stark;
