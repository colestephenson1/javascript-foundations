class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  };
  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length === 4) {
      this.riddles.shift();
    };
  };
  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (answer === this.riddles[i]['answer'] && this.riddles.length > 1) {
        this.riddles.splice(i,1);
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      } else if (answer === this.riddles[i]['answer'] && this.riddles.length === 1) {
        this.riddles.pop();
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`
      } else {
        this.heroesEaten += 1/3;
      };
    };
  };
};

module.exports = Sphinx;
