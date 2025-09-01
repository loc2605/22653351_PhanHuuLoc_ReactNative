"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task done"), time);
    });
}
const p1 = simulateTask(1000);
const p2 = simulateTask(2000);
const p3 = simulateTask(1500);
Promise.all([p1, p2, p3]).then((results) => {
    console.log("Câu 6:", results);
});
