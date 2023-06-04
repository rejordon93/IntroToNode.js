class MarkovMachine {
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  makeChains() {
    let chains = {};
    for (let i = 0; i < this.words.length - 1; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1];
      if (!(word in chains)) {
        chains[word] = [];
      }
      chains[word].push(nextWord);
    }
    this.chains = chains;
  }

  getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  makeText(numWords = 100) {
    let words = [];
    let currentWord = this.getRandomElement(Object.keys(this.chains));
    while (words.length < numWords && currentWord) {
      words.push(currentWord);
      let possibleNextWords = this.chains[currentWord];
      currentWord = this.getRandomElement(possibleNextWords);
    }
    return words.join(" ");
  }
}

module.exports = {
  MarkovMachine
};
