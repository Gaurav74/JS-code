const { process1, process2 } = require("./async.js");

async function main() {
    try {
        console.time(" total running time ");
        const value1 = await process1();
        const value2 = await process2();


        console.log("process returned : ", value1);
        console.log("process returned : ", value2);
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
process 1 ended: 5013.663ms

process 2 Started :
process 2 ended: 3007.474ms

process returned :  process 1.
process returned :  process 2.

 total running time : 8052.303ms
 */