// Problem Solving -
let arry = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

//1| How to remove duplicate elements from this array?

//2| How to find out the largest/lowest elements from this array?

//3| How to slice(22, 48) from this array ?

// Answer (1) remove duplicate elements from this array?
const uniqueArr = [...new Set(arry)];
//console.log("removeDuplicates:", uniqueArr);
const removeDuplicates = arry.filter(
  (item, index) => arry.indexOf(item) === index
);

//console.log("removeDuplicates:", removeDuplicates);

// Answer (2) How to find out the largest/lowest elements from this array?
// Sorting the array in ascending order
arry.sort((a, b) => a - b);

// The first element is the lowest
let minElement = arry[0];
console.log("minElement:", minElement);
// The last element is the largest
let maxElement = arry[arry.length - 1];
console.log("maxElement:", maxElement);

// Answer (3) How to slice(22, 48) from this array?
// Find the indices of 22 and 48
let startIndex = arry.indexOf(22);
let endIndex = arry.indexOf(48) + 1;

// Use slice to extract the portion
let slicedArray = arry.slice(startIndex, endIndex);

console.log("slicedArray:", slicedArray);
