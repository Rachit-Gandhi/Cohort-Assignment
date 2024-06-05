/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let lower_str = str.toLowerCase();
    console.log(typeof lower_str);
    let arr = lower_str.split('');
    console.log(arr);
    let count = 0;
    for(let i = 0; i<lower_str.length; i++){
      if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i'||arr[i] == 'o'||arr[i] == 'u'){
        count ++;
      }
    }
    return count;
}
console.log(countVowels("Hello"));

module.exports = countVowels;