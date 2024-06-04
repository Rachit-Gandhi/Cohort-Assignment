/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let arr1 = Array.from(str1.toLowerCase());
  let arr2 = Array.from(str2.toLowerCase());
  arr1.sort();
  arr2.sort();


  let str3 = arr1.join();
  let str4 = arr2.join();
  console.log(str3, str4);

  if(str3 === str4){
    return true;
  }
  return false;
}
console.log(isAnagram("Debit Card", "Bad Credit"));

console.log(isAnagram("hello","oleho"));

module.exports = isAnagram;
