/*

Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:

luckyNumbers(2)
// returns (3, 7)
luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)
*/

// Write your code below this line.

const luckyNumbers = (count) => {
  let availableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let luckyNums = [];

  // get random digit from 0 through availableNums.length-1
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // console.log(`getting random digit between ${min} & ${max}`);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // execute the for loop 'count' times
  for (let i = count; i > 0; i--) {
    // fetch a number from 'availableNums'
    const thisLuckyNum = availableNums.splice(
      getRandomInt(0, availableNums.length - 1),
      1
    );
    // console.log(`received the number ${thisLuckyNum}`);
    // pass that number into luckyNums
    luckyNums.push(thisLuckyNum);
  }

  return luckyNums;
};

// for (i = 20; i > 0; i--) {
const luckyNumbersArray = luckyNumbers(4);

console.log(luckyNumbersArray);
// }
