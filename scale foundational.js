
/**
 * @param {number} length - the length of the square
 * @param {number} width - the width of the square
 * @return {number} the area of the square
**/
function find_area_square(length, width){
  let answer = length * width
  return answer
}


/**
 * @param {Array.<number>} numbers - an array of numbers
 * @return {number} the sum of all the numbers
**/
function sum_of_numbers(numbers){

  /**---------------------------------**/

let myArray = [ 37, "words", 37.2 ];

for( let i=0;  i < myArray.length;  i++ ) {
  console.log("i is = " + i);
  console.log( myArray[i]);
}

// i = 0, is 0 < 3, go ahead, then set i = 1
// i = 1, is 1 < 3, go ahead, then set i = 2
// i = 2, is 2 < 3, go ahead, then set i = 3
// i = 3, is 3 < 3, no, stop


}


/**
 * @param {number} a - a number
 * @param {number} b - a number
 * @return {number} the smaller of the number
**/
function find_smaller_number(a, b){

  let (a > b)
  return b
  return a
  return answer;


}


/**
 * @param {Array.<number>} numbers - an array of numbers
 * @return {number} the smallest number in the array
**/

function find_smallest_number(numbers){

  myArray = [ 2, 4, 6, 8, 10,]
}



/**
 * @param {string} word - a random word
 * @param {number} length - the length of the abbreviation
 * @return {string} the first {length} number of letters of the word
**/

function abbreviate(word, length){

}


/**
 * @param {string} first_name - a first name
 * @param {string} last_name - a last name
 * @return {string} the full name, with last name first, separated by a comma
**/

function get_full_name(first_name, last_name){
  Myfunction_full_name(first_Michael, last_Ellis)
}

/**
 * ----------------
   ----------------
   DON'T CHANGE ANYTHING BELOW THIS LINE
   ----------------
   ----------------
 *
 **/

const commands = [
    'find_area_square(37, 29)',
    'sum_of_numbers([64, 34, 57, 49, 87, 9, 14])',
    'find_smaller_number(41, -13)',
    'find_smallest_number([30, 22, 63, 29, 4, 96])',
    'abbreviate("Medgar", 3)',
    'get_full_name("James", "Bond")'
];

for(const command of commands){
    console.log(`${command} = ${eval(command)}`);
}