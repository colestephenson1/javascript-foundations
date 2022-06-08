class Part {
  constructor(part) {
    this.name = part.name;
    this.type = part.type;
    this.value = part.value;
    this.broken = false;
    this.checkForValidity = this.validityCheck();
    this.isValid = false;
  };
  validityCheck() {
    if (this.name === null) {
      this.isValid = false;
      return 'This part needs a name!';
    } else if (this.type === null) {
      this.isValid = false;
      return 'This part needs a type!';
    } else if (this.value === null) {
      this.isValid = false;
      return 'This part needs a value!';
    } else {
      this.isValid = true;
    };
  };
};

module.exports = Part;
