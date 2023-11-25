const palindromes = function (palindrome) {
    let newPal = palindrome.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const splitPal = newPal.split('');
    splitPal.reverse();
    let reversePal = splitPal.join('');
    return newPal === reversePal;
};

// Do not edit below this line
module.exports = palindromes;
