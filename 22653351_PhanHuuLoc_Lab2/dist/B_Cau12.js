"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task finished in ${ms}ms`);
        }, ms);
    });
}
async function runTask() {
    const result = await simulateTask(2000);
    console.log("12:", result);
}
runTask();
