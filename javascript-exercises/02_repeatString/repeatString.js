const repeatString = function (string, num) {
    if (num < 0){
        return "ERROR"
    };
    let myString = "";
    for (let i = 0; i < num; i++) {
      myString += string;
    }
    return myString;
  };
  
  module.exports = repeatString;
  

// Do not edit below this line
module.exports = repeatString;
