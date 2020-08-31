//for loops
console.log("for loops");
for (let a = 1; a <= 5; a++) {
  console.log(a);
  if (a == 3) {
    break;
  }
}
console.log("while loops");
let b = 5;
//while loops
while (b < 9) {
  console.log(b++);
  if (b == 7) {
    continue;
  }
}
console.log("do while loops");
//do while
let num = 4;
do {
  console.log(num++);
} while (num < 9);

/**
 * OUTPUT :
 for loops
 1
 2
 3
 while loops
 5
 6
 7
 8
 do while loops
 4
 5
 6
 7
 8
 */