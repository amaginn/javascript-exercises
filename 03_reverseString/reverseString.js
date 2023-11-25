function reverseString(string) {

let split = string.split("");
let reverseArray = split.reverse();
let joinArray = reverseArray.join("");

    return joinArray
};


// Take the string and split it into individual characters (note you need this to work on all lengths)
// the string then becomes an array!
// reverse the array
// concataonate the array
// return string

// Do not edit below this line
module.exports = reverseString;
