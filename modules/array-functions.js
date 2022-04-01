const { randomIntegerBetweenZeroAnd } = require('./math-functions'); 
  
function randomItemIn(array) {
  const randomIndex = randomIntegerBetweenZeroAnd(array.length);
  return array.at(randomIndex);
}

module.exports.randomItemIn = randomItemIn;