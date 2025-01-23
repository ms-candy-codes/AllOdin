function add7(num){
    return num + 7;
}

function multiply(num1, num2){
    return num1 * num2;
}

function capitalize(string){
    let lowerCaseString = string.toLowerCase();
    return string.slice(0,1).toUpperCase() + string.slice(1, string.length).toLowerCase();
}

function lastLetter(string){
    return string.charAt(string.length-1);
}

console.log(add7(7));
console.log(multiply(3, 5));
console.log(capitalize("HELLO WORLD"));
console.log(lastLetter("abcd"));