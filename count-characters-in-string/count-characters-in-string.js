/**
 * countCharactersInString - A function that counts the number of characters in a given string without using the length method.
 *
 * @param {string} str - The input string
 * @returns {number} - The number of characters in the input string
 *
 * Usage:
 * const result = countCharactersInString("Hello, World!");
 * // Output: 13
 */
function countCharactersInString(str) {
    let lengthString = 0;
    for (var i of str){
       
        lengthString++;
    }
    // console.log(str.length)
    return lengthString;
    
}

module.exports = countCharactersInString;
