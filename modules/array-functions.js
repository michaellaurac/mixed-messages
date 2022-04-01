import { randomIntegerBetweenZeroAnd } from './math-functions.js';
//const { randomIntegerBetweenZeroAnd } = require('./math-functions.js');
  
function randomItemIn(array) {
  const randomIndex = randomIntegerBetweenZeroAnd(array.length);
  return array.at(randomIndex);
}

export { randomItemIn };
//module.exports.randomItemIn = randomItemIn;