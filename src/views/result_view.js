const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {

  PubSub.subscribe('FormView: number-submitted', (event) => {
    this.displayNumber(event.detail);
  });

  PubSub.subscribe('PrimeChecker: result', (event)=> {
    this.displayResult(event.detail);
  });
};


ResultView.prototype.displayNumber = function (number) {
  const numberChecked = document.querySelector('#number-checked');
  numberChecked.textContent = number + `...?`;
};

ResultView.prototype.displayResult = function (answer) {
  const result = document.querySelector('#result');
  if (answer) {
    result.textContent = `Yes! It's Prime!`;
    console.log(result.textContent);
  } else {
    result.textContent = `No... It's not prime...`;
  }
};

module.exports = ResultView;
