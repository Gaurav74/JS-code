/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let guy={
    say(line){
        console.log(`guy says  ${line} and sex : ${this.gender}`);
    }//,{["name","gaurav","gender","male"]}
};
Object.assign(guy,{gender:"male"});
guy.say("hello boy");
console.log(Object.getPrototypeOf(guy.say)==Function.prototype);
let gaurav=Object.create(guy);
gaurav.gender="Male";
gaurav.say("hell from gaurav");
console.log(Object.getPrototypeOf(guy.gender)==Object.getPrototypeOf(gaurav.gender));