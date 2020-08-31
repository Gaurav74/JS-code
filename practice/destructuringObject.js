let man = {
    "name": "gaurav",
    "age": 23,
    "school": "military school",
    "home": "katauli"
};

let female = {
    "name": "female",
    "age": 23,
};

function printfemale({ name, age }) {
    let string = `This gender is ${name} and age is ${age}`;
    console.log(string);
}


function nameAge({ name, age }) {
    console.log("My name is " + name + ". My age is " + age + ".");
}

nameAge(man);
printfemale(female);

/**
 * OUTPUT :
 My name is gaurav. My age is 23.
 This gender is female and age is 23
 */