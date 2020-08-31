class person {

    constructor(type) {
        this._gender = type;
    }

    get genderType() {
        return this._gender;
    }

    set genderType(type) {
        this._gender = type;
    }
}

let male = new person("male");
let female = new person("female");

console.log(male.genderType);
console.log(female.genderType);

/**
 * OUTPUT :
 gauravkumar
 hello!factorial is 120 fibo number is 21 concatening is gauravkumar
 */