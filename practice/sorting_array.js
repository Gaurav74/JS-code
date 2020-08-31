let array = [5, 4, 65, 86, 68, 62, 56, 6];
console.log(" This is before sorting..... ");
console.log(array);
// while sorting array JS takes numeric as strings and sort them like string.
// so it has to converted to number by passing a function.
/*
passing a function (a,b) return a-b means 
if < 0 then a will come first
if =0 then it will do nothing
if > 0 then  b will come first. 
*/
array.sort((a, b) => { return a - a });
console.log(array);

/**
 * OUTPUT :
 This is before sorting.....
 [
   5,  4, 65, 86,
  68, 62, 56,  6
 ]
 [
   5,  4, 65, 86,
  68, 62, 56,  6
 ]
 */