let string = " 24 carat gold worth 20k";
let pattern = /[^0-9aeiou ]/ig;
console.log(string.match(pattern));

/**
 * OUTPUT :
[
  'c', 'r', 't', 'g',
  'l', 'd', 'w', 'r',
  't', 'h', 'k'
]
 */