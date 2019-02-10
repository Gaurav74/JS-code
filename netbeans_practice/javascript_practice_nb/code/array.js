//arrays 
let array=[1,2,5,6,4];
for(let i of array){
    console.log(i);
}
for(let i=0;i<5;i++){
    console.log("-");
}
let strings=['a','b','r',"gaurav"];
for (let i of strings) {
    console.log(i);
}
console.log(array[2]);
let new_array=array.slice(1,3);
console.log(new_array);
array.push(54);
console.log(array.pop());
array.unshift(21);
console.log(array);