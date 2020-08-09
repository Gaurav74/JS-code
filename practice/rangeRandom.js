function rangeRandom(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let i = 5;
while (i-- > 0) {
    console.log(rangeRandom(5, 11));
}