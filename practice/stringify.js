var item = " animals";
var list = [1, 2, 3, 4];

console.log("Before" + JSON.stringify(list));
console.log(list.push(8));
console.log("after" + JSON.stringify(list));

/**
 * OUTPUT :
 Before[1,2,3,4]
 5
 after[1,2,3,4,8]
 */