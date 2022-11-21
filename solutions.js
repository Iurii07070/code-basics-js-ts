/*  Solutions from last to first:
For loop 72/72
JavaScript: For loop
Instructions
Samwell discovered that his messages were being intercepted at Castle Gemini and being read there. This made his attacks no longer a surprise. After some thought, he developed a program to encrypt the messages according to the following algorithm. It would take the text and rearrange it every two consecutive characters.
*/

encrypt('move'); // 'omev'
encrypt('attack'); // 'taatkc'
// If the number of characters is odd
// the last character remains unchanged
encrypt('go!'); // 'og!'


// BEGIN
const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
};
// END

export default encrypt;


/*
Returning from loops 71/72
JavaScript: Returning from loops

Instructions
Write the hasChar() function that checks whether a string contains a given character (case sensitive). The function takes two arguments:

String
Character to look for
*/


// BEGIN
const hasChar = (str, char) => {
  let i = 0;
  while (i < str.length) {
    if (str[i] === char) {
      return true;
    }

    i += 1;
  }

  return false;
};
// END

export default hasChar;

/*
Increment and decrement 70/72
JavaScript: Increment and decrement

Instructions
Write a function, makeItFunny(), which returns a copy of a string passed to it, where each nth element is uppercase. n also needs to be passed to the function.

To find each nth element, you will need to find the remainder from division %. Think about how you can use it.
*/
/* eslint-disable no-plusplus */

// BEGIN
const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i++;
  }

  return result;
};
// END

export default makeItFunny;

/*Syntactic sugar 69/72
JavaScript: Syntactic sugar
Instructions
Write the filterString() function that takes a string and a character as input and returns a new string, from which all occurrences of the character are removed.
*/
// BEGIN
const filterString = (str, char) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const currentChar = str[i];
    if (currentChar !== char) {
      result = `${result}${currentChar}`;
    }
    i += 1;
  }

  return result;
};
// END

export default filterString;

/*
Building strings with loops 68/72
JavaScript: Building strings with loops
Instructions
Write the function even() that returns a new string consisting of even characters from the original string
*/
/* eslint operator-assignment: 0 */

// BEGIN
const even = (str) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if (i % 2 !== 0) {
      result = `${result}${str[i]}`;
    }
    i = i + 1;
  }

  return result;
};

// END

export default even;

/*Conditions inside loops 67/72
JavaScript: Conditions inside loops

Instructions
The function from the theory is case sensitive. It means 'A' and 'a' from its point of view are different characters. Write a version of this function that is not case sensitive:
*/
/* eslint operator-assignment: 0 */

// BEGIN
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count = count + 1;
    }
    i = i + 1;
  }

  return count;
};
// END

export default countChars;


/*Iterating over a string 66/72
JavaScript: Iterating over a string

Instructions
Write the printReversedWordBySymbol() function that takes a word as input and prints it by character, just as in the example we gave, but does it in reverse order.
*/
/* eslint operator-assignment: 0 */

// BEGIN
const printReversedWordBySymbol = (word) => {
  let i = word.length - 1;
  while (i >= 0) {
    console.log(word[i]);
    i = i - 1;
  }
};
// END

export default printReversedWordBySymbol;

/*Data aggregation (strings) 65/72
JavaScript: Data aggregation (strings)

Instructions
Write the joinNumbersFromRange() function that joins all numbers in a range into a string:
*/
/* eslint operator-assignment: 0 */

// BEGIN
const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let result = '';

  while (i <= finish) {
    result = `${result}${i}`;
    i = i + 1;
  }

  return result;
};
// END

export default joinNumbersFromRange;

/*Data aggregation (numbers) 64/72
JavaScript: Data aggregation (numbers)

Instructions
Write the multiplyNumbersFromRange() function that multiplies numbers in a given range, including its bounds. An example:
*/
/* eslint operator-assignment: 0 */

// BEGIN
const multiplyNumbersFromRange = (start, finish) => {
  let i = start;
  let result = 1;

  while (i <= finish) {
    result = result * i;
    i = i + 1;
  }

  return result;
};
// END

export default multiplyNumbersFromRange;

/*While loop 63/72
JavaScript: While loop

Instructions
Edit the printNumbers() function so that it prints the numbers in reverse order. To do this, go from the upper bound to the lower bound. In other words, you should initialize the counter with the maximum value, and in the loop body, you should iterate it backwards down to the lower limit.
*/
// @ts-check
/* eslint operator-assignment: 0 */

const printNumbers = (initialNumber) => {
  // BEGIN
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');
  // END
};

export default printNumbers;


/*Loops
Any code can be repeated thousands, millions, or even billions of times. This offers up a lot of possibilities for building programs and sophisticated systems when combined with the other tools you already know – variables and conditions. Here's an obvious example. In a 500-page book, you must locate a specific phrase. The phrase is fresh in your mind, but you can't recall the page number. The quickest (and most time-consuming) method is to go through each page until you find the right one. Loops are required for such repetitive activities.
*/
