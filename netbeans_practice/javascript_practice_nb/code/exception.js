function div(first, second) {

    if (!isNaN(first) & !isNaN(second)) {
        return (first / second);
    } else {
        throw new Error("not a number");
    }
}
"use strict";
try {
    console.log(div(2, 4));
    console.log(div("k", 5));
    console.log(div(6, 0));
} catch (e) {
    console.log(e);
} finally {
    console.log("bye ....");
}