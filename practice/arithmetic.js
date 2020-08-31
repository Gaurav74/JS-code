let a = 3,
  b = 9;
console.log(b / a);
console.log(a * b);
let c = a + b;
console.log(c);
console.log(a / b);
console.log(a++, b++);
console.log(typeof a);
console.log((typeof a) === Number);
console.log(a == NaN);
console.log(a < b);
console.log("zero equivalence", 0 == undefined);

/**
 * OUTPUT :
 3
27
12
0.3333333333333333
3 9
number
false
false
true
zero equivalence false
 */