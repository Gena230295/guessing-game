class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.newMin = min;
    this.newMax = max;
  }

  guess() {
    this.newNum = this.newMax - Math.floor((this.newMax - this.newMin) / 2);
    return this.newNum;
  }

  lower() {
    this.newMax = this.newNum;
  }

  greater() {
    this.newMin = this.newNum;
  }
}

module.exports = GuessingGame;
