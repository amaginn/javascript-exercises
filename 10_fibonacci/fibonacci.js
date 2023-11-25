const fibonacci = function(n) {
    let newNum = parseInt(n);
    if (newNum < 0 ) {
        return "OOPS"
    } else if (newNum <= 1) {
        return newNum;
    } 
    return fibonacci(newNum -1) + fibonacci(newNum -2);
};

// Do not edit below this line
module.exports = fibonacci;
