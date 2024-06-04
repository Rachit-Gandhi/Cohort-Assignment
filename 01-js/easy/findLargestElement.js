/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max_num = null;
    for(let i =0; i<numbers.length; i++){
        if(numbers[i]>max_num){
            max_num = numbers[i];
        }
    }
    return max_num;
}
let number_needed = findLargestElement([3, 7, 2, -9, 1]);
console.log(number_needed);

module.exports = findLargestElement;