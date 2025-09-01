"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task done"), time);
    });
}
// Demo
simulateTask(1500).then((msg) => console.log("Câu 5:", msg));
