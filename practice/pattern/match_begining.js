/**
 *  ^ this symbol tells pattern to match at the beginning of the line
 *  $ symbol will make match at the end of the line.
 */
let string = "it begins from here on this day.";
let pattern = /^it/
let endPattern = /y./
console.log(string.match(pattern));
console.log(endPattern.test(string));

/**
 * OUTPUT :
[
  'it',
  index: 0,
  input: 'it begins from here on this day.',
  groups: undefined
]
true
 */