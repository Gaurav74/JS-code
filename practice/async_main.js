const { process1, process2 } = require("./async.js");

async function main() {
    try {
        console.time(" total running time ");
        const value1 = await process1();
        const value2 = await process2();


        console.log("process returned : ", value1);
        console.log("process returned : ",value2);
        console.log();
        console.timeEnd(" total running time ");
    }
    catch(error) {
        console.error("error : ", error);
    }
}            
main();