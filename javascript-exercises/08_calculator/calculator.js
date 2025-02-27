const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
  arr.forEach((num)=>{
    total+=num;
  });
  return total;
};

const multiply = function(arr) {
  return arr.reduce((multi, current) => multi * current);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(x) {
  let factor = 1;
	for(let i = x; i > 0; i--){
    factor*=i;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
