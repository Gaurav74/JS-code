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

/**
 * OUTPUT :
process 1 Started :
process 2 Started :
process 2 ended: 3004.886ms

process 1 ended: 5011.414ms

process returned 1 :  process 1.
process returned 2 :  process 2.

 total running time : 5051.817ms
 */