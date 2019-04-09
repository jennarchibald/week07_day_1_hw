const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function (){

};


PrimeChecker.prototype.bindEvents = function(){
  PubSub.subscribe('FormView: number-submitted', (event) => {
    const number = event.detail;
    const answer = this.checkPrime(number);
    PubSub.publish('PrimeChecker: result', answer);
  })
};

PrimeChecker.prototype.checkPrime = function (number) {
  if (number == 2){ return true};

  if (number <= 1 || number % 2 === 0 ){return false};

  let largestPossibleFactor = Math.floor(Math.sqrt(number));

  for (let i = 2; i <= largestPossibleFactor; i++){
    if (number % i === 0){
      return false;
    };
  };
  return true;
};

module.exports = PrimeChecker;
