function isLess(a, b) {
    if (a < 0 || b < 0) return undefined;

    return a < b;

}

console.log(isLess(-0, 5));

/**
 * OUTPUT :
 true
 */