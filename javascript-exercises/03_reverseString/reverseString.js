const reverseString = function(string) {
    let splitUp = string.split("");
    let reverseString = splitUp.reverse();
    let joinAll = reverseString.join("");
    return joinAll;
};

// Do not edit below this line
module.exports = reverseString;
