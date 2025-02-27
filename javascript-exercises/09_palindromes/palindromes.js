const palindromes = function (string) {
    let diction = "abcdefghijklmnopqrstuvwxyz0123456789"
//   string = string.toLowerCase();
//    string = string.split('');
//    string = string.filter((letter)=>{
//     diction.includes(letter);
//    }).join('');
let checkedString = string
    .toLowerCase()
    .split('')
    .filter((letter)=>diction.includes(letter))
    .join('');

    let reversedString = checkedString.split('').reverse().join('');

    return checkedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
