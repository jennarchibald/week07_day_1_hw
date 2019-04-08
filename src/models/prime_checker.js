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

  if (number <= 1){return false};

  let factorials = 0;
  let largestPossibleFactor;

  if (number % 2 === 0){
    return false;
  } else {
    largestPossibleFactor = (number - 1) / 2;
  };

  for (let i = 1; i <= largestPossibleFactor; i++){
    if (number % i === 0){
      factorials++;
    };
    if (factorials > 2){ break;}
  };

  if (factorials > 2){return false};

  return true;
};

module.exports = PrimeChecker;
