function repeatString(string, num) {
    if (num < 0) return ("ERROR")

    let repeatHey = '';
    for (let i = 0; i < num; i++) {
      repeatHey += string;
    }
    return repeatHey
};

// let randomNum = (Math.floor(Math.random) * 1)
// repeatString("hey", 3, 10, 1, 0, -1, randomNum);


// How do I write a
// Do not edit below this line
module.exports = repeatString;
