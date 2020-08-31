let boy = Object.create(null);
Object.assign(boy, { name: null, age: null, info });
let gaurav = Object.create(boy);
Object.assign(gaurav, { name: "Gaurav Kumar", age: 21 });

function info() {
    console.log(`this is name ${this.name} age is ${this.age}`);
}
console.log(gaurav);
gaurav.info();



function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
whiteRabbit.speak("luck you");

/**
 * OUTPUT :
 Object <[Object: null prototype]> {
  name: 'Gaurav Kumar',
  age: 21
 }
 this is name Gaurav Kumar age is 21
 The white rabbit says 'luck you'
 */