const { process1, process2 } = require("./async.js");

async function main() {
    try {
        console.time(" total running time ");
        const data = await Promise.all([process1(), process2()]);

        console.log("process returned 1 : ", data[0]);
        console.log("process returned 2 : ", data[1]);
        console.log();
        console.timeEnd(" total running time ");
    }
    catch (error) {
        console.error("error : ", error);
    }
}
main();