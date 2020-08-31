let string = " :as this is as string : to match as this string :";
/**
 * default pattern matching approach is gredy
 * greedy means it will find the longest string possible
 * lazy means  it will find the shortest
 * 
 */
let greedyPattern = /:.*:/ig;
// . is necessary because it check for characters between two :
let lazyPattern = /:.*?:/ig;
console.log(string.match(greedyPattern));
console.log(string.match(lazyPattern));

/**
 * output :
[ ':as this is as string : to match as this string :' ]
[ ':as this is as string :' ]
 */