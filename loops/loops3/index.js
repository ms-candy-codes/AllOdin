// let count = 50;

// function isPrime(number){
//     if(
//         (number !== 2 && number % 2 === 0)||
//         (number !== 3 && number % 3 === 0)||
//         (number !== 4 && number % 4 === 0)||
//         (number !== 5 && number % 5 === 0)
//     ){
//         console.log("Not a prime number");
//     }else{
//         console.log("Is a prime number");
//     }
// }

// while(count !== 1){
//     isPrime(count);
//     count--;
// }


let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}


// Add your code here
let primeNumbers = ''; 
while (i > 1) {
  if (isPrime(i)) {
    primeNumbers += `${i} `;
  } else {
    console.log("false");  
}
i--; 
}

para.textContent = primeNumbers;
// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);