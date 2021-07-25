//arrow functions 
//1.odd numbers in a array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter(n => n%2);

console.log(odds); 

//2.strings to titlecaps

function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  }
  
  console.log(titleCase('john wick')); 

//3.sum of numbers in array

var arr = [1,2,3,4,5];
var add = arr.reduce((a, b) => a + b, 0);
console.log(add); 

//4.return prime number

var arr = [1,2,3,4,5,6,7,8,9,10];
var prime = arr.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(prime); 

//5.palindrome
