let array = [1, 5, 8, 6, 8];

let secondArray = array;
let copyArray = [...array];
array[0] = 9;
console.log(array);
console.log(secondArray);
console.log(copyArray);