const pro = require("prompt-sync");
const prompt = pro();

let inputnumber = prompt("Enter the number : ");
let primesArray = new Array();

let index = 0;
for (let i = 2; i <= inputnumber; i++) {

//check inputnum is divisible - find factors - 2 to number

  if (inputnumber % i == 0) {

    //Check divisible number d is prime or not

    let isPrime = 1;
    for (let d = 2; d <= i / 2; d++) {
      if (i % d == 0) {
        isPrime = 0;
      }
    }

    // If i is Prime number
    
    if (isPrime == 1) {
      primesArray[index] = i;
      index++;
    }
  }
}
console.log("Prime factors are : "+primesArray);