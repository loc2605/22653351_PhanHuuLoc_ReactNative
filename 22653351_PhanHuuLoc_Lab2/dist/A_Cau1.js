"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHelloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
sayHelloAsync().then((message) => {
    console.log(message);
});
