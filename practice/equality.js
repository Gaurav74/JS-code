var item = 3;

function doubleEquals() {
    if (item == 3) {
        console.log("it is equal to number");
    }

    if (item == '3') {
        console.log(" it is also equal to '3'");
    }
}


function threeEquals() {
    if (item === 3) {
        console.log("It is equal to number");
    }

    if (item === '3') {
        console.log(" it is equal to '3'");
    }
}

doubleEquals();
console.log("-------------------Now three equals -----------------");
threeEquals();

