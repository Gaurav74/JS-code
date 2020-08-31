/**
 * create a pattern to match
 * 1. if it has number then it must be at end
 * 2. it must have alphabets in running and capitals
 * 3. it must be atleast 2 characters long
 */
let pattern = /^[A-Za-z]{2,}\d*$/g
let string = "gauravKu74";
console.log(pattern.test(string));

/**
 * OUTPUT :
true
 */