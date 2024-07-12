// remove duplicates
const arr4 = [1, 1, 2, 3, 3, 5, 5];
console.log(`Remove duplicates from array [1, 1, 2, 3, 3, 5, 5] --> ${[...new Set(arr4)]}`);
console.log(`Remove duplicates from array [1, 1, 2, 3, 3, 5, 5] --> ${arr4.filter((item, index) => arr4.indexOf(item) == index)}`);
// compare objects
const obj1 = { one: 1, two: 2};
const obj2 = { one: 1, two: 2};
const obj1Keys = Object.keys(obj1);
const obj2Keys = Object.values(obj2);
// reference types
const a = [];
const b = a;
const c = [];
console.log(`Is array a the same as b? --> ${b === a}`);
console.log(`Is array c the same as a? --> ${c === a}`);
/** compare matrices or nested arrays
  I (input): 2 matrices that are array of arrays nested any level deep
  O (output): boolean
  C (constraints): optimize
  E (edge cases): empty array, array of arrays nested several levels deep 
  time complexity
  space complexity
*/
let compareMatrix = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return a === b;
  }
  let out = true;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (out) {
      out = compareMatrix(a[i], b[i]);
    } else {
      return false;
    }
  }
  return out;
};
console.log(
  compareMatrix([], []),
  compareMatrix([1], [1]),
  compareMatrix([[2], [3]], [[2], [3]]),
  compareMatrix([[2, 3, [4, 5, [5, 6]]]], [[2, 3, [4, 5, [5, 6]]]]),
  compareMatrix([1], [3]),
  compareMatrix([[4], [8]], [[4], [9]])
);
// reverse the contents of a string
console.log('hello'.split('').reverse());
const obj5 = {1: 'I', 2: 'II'};
console.log(obj5, obj5['1']);

