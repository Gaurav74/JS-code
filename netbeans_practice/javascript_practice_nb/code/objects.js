let boy = {name: "gaurav", age: 22};
let me = boy;
console.log(boy, me);
boy.age = 21;
console.log(boy, me);
console.log("age" in boy);
console.log(Object.keys(boy));
Object.assign(boy, {age: 20, home: "katauli"});
console.log(boy);