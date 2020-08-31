function generateRandom() {
    return Math.floor(Math.random() * 10);

}

let i = 5;
while (i-- > 0) {
    console.log(generateRandom());
}

/**
 * OUTPUT :
 3
 4
 3
 3
 9
 */