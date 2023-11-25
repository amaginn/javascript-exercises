const sumAll = function(highEnd, lowEnd) {

    if (highEnd < lowEnd) {
        [highEnd, lowEnd] = [lowEnd, highEnd];
    }

    let array = [];
    for (let i = highEnd; i >= lowEnd; i--) {
        array.push(i);
    }

    let sum = 0
    for (let i = 0; i < array.length; i++ ) {
    sum += array[i]
    }

    if (sum < 0) {
    return "ERROR"
    }

    if (Number.isInteger(highEnd) && Number.isInteger(lowEnd) ) {
        return sum;
    } else 
        return "ERROR"

};
// list all numbers from this larger number to this smaller number
    // parameters list and add 
// add each number listed to one another

// Do not edit below this line
module.exports = sumAll;
