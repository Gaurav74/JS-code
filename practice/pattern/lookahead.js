/**
 *  (?=*)a : * contains desired pattern that matches and return 'a' if satisfied. 
 *  (?!*)a : * contains desired pattern that not matches and return 'a' if Fsatisfied. 
 */
let normalPattern = /a(?=\d{5})/g;
let string = "a12345b";
let qPattern = /(?=\w){2}q/;
let skipPattern = /a(?=\w){5}b(?=\w){3}c/g;
console.log(qPattern.test("fq"));
console.log("ffq".match(qPattern));
console.log(normalPattern.test(string));
console.log(string.match(normalPattern));
console.log("a12345b6789c".match(skipPattern));

/**
 * output :
true
[ 'q', index: 2, input: 'ffq', groups: undefined ]
true
[ 'a' ]
null
 */