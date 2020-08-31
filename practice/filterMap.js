let array = [5, 4, 2, 5, 7, 'l'];

function squared(array) {
    return array.filter(num => Number.isInteger(num) && num > 2).map(x => Math.pow(x, 2));
}

console.log(squared(array));

/**
 * OUTPUT :
 [ 25, 16, 25, 49 ]
 */