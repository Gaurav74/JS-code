let [x, y, , z] = [1, 2, 3, 4];

let num = 4, numSec = 9;
[num, numSec] = [numSec, num];
console.log(x, y, z);
console.log(num, numSec);

/**
 * OUTPUT :
 1 2 4
 9 4
 */