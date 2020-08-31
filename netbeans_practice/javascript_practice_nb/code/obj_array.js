let obj = [
    { name: "gaurav", age: 25 },
    { name: "kumar", age: 21 },
    { name: "eminem", age: 51 }
];
console.log(obj);
console.log(obj[1]);
obj[1].age = 23;
console.log(obj[1]);
console.log(Object.keys(obj[1]));
console.log(Object.assign(obj[1], { age: 22, food: "chicken" }));

let array = [];
function addEntry(values, key) {
    array.push({ values, key });
}
addEntry(["fun", "food"], true);
addEntry(["no fun", "study"], false);
console.log(array[1], " total entry : ", array.length);

/**
 * OUTPUT :
 [
  { name: 'gaurav', age: 25 },
  { name: 'kumar', age: 21 },
  { name: 'eminem', age: 51 }
 ]
 { name: 'kumar', age: 21 }
 { name: 'kumar', age: 23 }
 [ 'name', 'age' ]
 { name: 'kumar', age: 22, food: 'chicken' }
 { values: [ 'no fun', 'study' ], key: false }  total entry :  2
 */