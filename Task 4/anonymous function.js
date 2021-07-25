//iife function and anonymous function
//1.odd numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var odd = numbers.filter(function(item) {
   return (item % 2 == 1);
});

console.log(odd);

//2.strings to title caps

function titleCase(str) {
    return str.split(' ').map(function(val){ 
      return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
    }).join(' ');
  }
  console.log(titleCase("iron man")); 

//3.sum of numbers in array

var arr = [1,2,3,4,5];
  function getArraySum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}
console.log(getArraySum(arr)); 

//4.prime number

var arr = [1,2,3,4,5,6,7,8,9,10];
var prime = arr.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(prime); 

//5.palindrome

//6.remove duplicated

var arr = ["a","b","c","a","b"];

function removeDuplicates(data){
    return [...new Set (data)]
}
console.log(removeDuplicates(arr)); 

//7.
    
