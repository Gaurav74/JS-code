function parseStringToInt(str) {
    return parseInt(str);
}

function parseStringToIntRadix(str, radix) {
    return parseInt(str, radix);
}

console.log(typeof parseStringToInt("25"), parseStringToInt("25"));
console.log(parseStringToIntRadix("1101", 2));