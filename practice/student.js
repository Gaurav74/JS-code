"use strict";
class user {

    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
     
     details() {
    return ` This Candidate name is : ${this.name} and age is ${this.age} and\
     likes ${this.subject}`;
        }

}

console.log("hello");
let gaurav=new user("Gaurav",24,"maths");
console.log(gaurav.details());