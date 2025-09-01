"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber() {
    return new Promise((resolve) => {
        const num = Math.floor(Math.random() * 100);
        resolve(num);
    });
}
// Demo
randomNumber()
    .then((num) => console.log("Câu 4 Random:", num))
    .catch((err) => console.error("Câu 4 Error:", err));
