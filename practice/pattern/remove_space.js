let spaceRemoverPattern = /^\s+|\s+$/g;
let string = "  space removed  ";
console.log(string);
console.log(string.replace(spaceRemoverPattern, ''));

/**
 * output :
    space removed
space removed
 */