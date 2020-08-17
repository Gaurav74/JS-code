const { exception } = require("console");
const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
    async process1() {
        try {
            console.log("process 1 Started : ");
            //throw new exception("from process 1");
            console.time("process 1 ended");
            await wait(5000);
            console.timeEnd("process 1 ended");
            console.log();
            return "process 1.";
        } catch (error) {
            console.error("inside process1 : ", error);
        }

    },

    async process2() {
        try {
            console.log("process 2 Started : ");
            console.time("process 2 ended");
            await wait(3000);
            console.timeEnd("process 2 ended");
            console.log();
            return "process 2.";
        } catch (error) {
            console.error("inside process2 : ".error);
        }

    }

};
