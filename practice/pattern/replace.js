/**
 * replace function is used to replace characters in string. pattern id used to replace
 * the desired string.
 * pattern groups are also used to identify  pattern in string and can be accesed
 * directly by '$' symbol. 
 */

let pattern = /name/;
let string = " my name is gaurav";
console.log(string.replace(pattern, "Name"));
let replaceString = " hello boys";
let replacePattern = /(\w+)\s(\w+)/;
console.log(replaceString.replace(replacePattern, '$2 $1'));

/**
 * OUTPUT :
 my Name is gaurav
 boys hello
 */