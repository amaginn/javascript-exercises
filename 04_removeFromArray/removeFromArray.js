function removeFromArray(array, ...options) {
    
    function findOptions(num) {
        return !options.includes(num);

    }                                  
    return array.filter(findOptions);
}

// declare the array and the possible strings/integers to remove
    // done with the parameters in the OG function
// filter the array and find the variables to remove
    // check to see whether the number (num(1,2,3,4,5)) is included in the options, options are the things to be removed from the array 
        // lets say 1 is found (true)
    // the '!' switches the finding of num in the include fuction from true to false 
        // 1 is now turned 'false'
    // this false return will then tell the includes function to remove the num found '!true'
        // 1 is now removed from the original array
// return 

// Do not edit below this line
module.exports = removeFromArray;
