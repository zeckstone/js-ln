// Finding maximum and minimum values in an array
const arr = [1, 9, 8, 5];
let maxSeq = Math.max(...arr);
console.log(`The maximum number is ${maxSeq}`);
console.log(`Minimum number is: ${Math.min(...arr)}`);
// Using the reduce method of an array
arr.reduce((acc, curr) => {
    const result = [...acc, curr + 5];
    console.log('accumulator: ', result);
    return result;
}, [1, 3, 4, 5])

const arr1 = [1, 2 , 3 , 4, 5];
const sum = arr1.reduce((acc, curr) => acc + curr);
console.log(`Sum of items in the array is: ${sum}`);
// reduce with a condition
const reduceCondition = arr1.reduce((acc, curr) => {
  if (curr > 2) return acc + curr;
  else return acc;
}, 0);
console.log(`Reduced condition is ${reduceCondition}`);
// indexOf
console.log(`Index of the item is ${arr1.indexOf(3)}`);
// map
const mappedArr = arr1.map(item => {
  if (item <= 3) return `can accomodate`;
  else return `over limit`;
});
console.log(mappedArr);
// slice
const slicedArr = arr1.slice(2, 4);
console.log(`Sliced array is ${slicedArr}`);
// reduce from right to left
const arr3 = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(`Reduce from right: ${arr3.reduceRight((acc, curr) => acc.concat(curr))}`);
// concat
console.log(`concat 23 to this array [1, 2, 3, 4, 5]: ${arr1.concat(23)}`);
// reverse - mutates array
console.log(`Reversed array [1, 2, 3, 4, 5]: ${arr1.reverse()}`);
// some
console.log(`Are some array items greater than 2? --> ${arr1.some(item => item > 2)}`);
// every
console.log(`Are all array items greater than 2? --> ${arr1.every(item => item > 2)}`);
// remove duplicates
const arr4 = [1, 1, 2, 3, 3, 5, 5];
console.log(`Remove duplicates from array [1, 1, 2, 3, 3, 5, 5] --> ${[...new Set(arr4)]}`);
console.log(`Remove duplicates from array [1, 1, 2, 3, 3, 5, 5] --> ${arr4.filter((item, index) => arr4.indexOf(item) == index)}`);