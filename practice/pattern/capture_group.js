/**
 * sometimes pattern repeats in a pattern formula. so it can be converted in a group
 * to repeat it by help of '\1' '\2' like these. 1 represents the first group and second
 * group respectievely but it will match whole string and match pattern group as single
 * entity also. so if used with match function it will return multiple objects.
 * so, to overcome this use '^' and '$' symbol to represent start and end of string
 * respectievely.
 */
let pattern = /^(\w+)\s\1\s\1$/;
let string = "ho ho ho";
let secondString = "ho ho ho ho";
console.log(pattern.test(string));
console.log(string.match(pattern));
console.log(secondString.match(pattern)); // it doesnot match.

/**
 * output :
 true
[ 'ho ho ho', 'ho', index: 0, input: 'ho ho ho', groups: undefined ]
null
 */