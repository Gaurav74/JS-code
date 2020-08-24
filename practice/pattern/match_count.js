/**
 * '*' means zero or more than zero
 * '+' means atleast one or more
 * {d} 'd' means count of number , it counts specific number of character
 * {d1,d2} it matches in the range
 */
let string = " heelllooooooo bbbooooyyy";
let pattern = /o{3,7}/ig;
let plusPattern = /o+/ig;
let countPattern = /o{4}/ig;
console.log("range : ");
console.log(string.match(pattern));
console.log("plus :");
console.log(string.match(plusPattern));
console.log("count : ");
console.log(string.match(countPattern));