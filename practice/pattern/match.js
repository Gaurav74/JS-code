let regex = /boy/g;
// if we put a 'g' at last then it will return all the matching string
let string = " he is a boy and he is not a girl , so he is a boy.";
let result = string.match(regex);
console.log(result);

// wildcard like . (dot) makes it match any character  equal to number of dots

let wildString = " run pun buun nun ";
let wildPattern = /.un/g;
console.log(wildString.match(wildPattern));

/**
 * OUTPUT :
[ 'boy', 'boy' ]
[ 'run', 'pun', 'uun', 'nun' ]
 */