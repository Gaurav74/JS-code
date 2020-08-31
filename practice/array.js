var details = [["name", "Gaurav"], ["age", 25], ["address", ["katauli", "islampur"]]];
console.log("my name is " + details[0][1] + " age is " + details[1][1] +
    " address is " + details[2][1][0]);

// array.push()  -- it will push item in the array.
//array.pop()  --- it will remove the last element from array and return it.
// array.shift()  --- it will remove the first element from array and return it.
// array.unshift() ---- it will add element in the beginning of the array.

/**
 * OUTPUT :
 my name is Gaurav age is 25 address is katauli
 */