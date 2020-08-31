/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let gaurav = { name: "Gaurav", age: 21, sex: "male" };
console.log(gaurav.toString());
//gaurav.prototype.name = "Gaurav";
//gaurav.prototype.age = 45;

gaurav.name = "hello";
gaurav.age = 45;
gaurav.prototype.toString = function () {
    return `my name is ${this.name} age is ${this.age}`;
};
console.log(String(gaurav));
//////not working

/**
 * OUTPUT :
 !!!!!!!!!!!!!!!!!!!!!!!!error here !!!!!!!!!!!!!!!!
 */