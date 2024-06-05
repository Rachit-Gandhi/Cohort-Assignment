/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lower_str = str.toLowerCase();
  let arr  = lower_str.split('');
  for(let i =0; i<((arr.length/2) + 1); i++){
    if(arr[i] == arr[arr.length-i]){
      return true;
    }
  }
  return false;
}
console.log(isPalindrome("Traart"));
module.exports = isPalindrome;
