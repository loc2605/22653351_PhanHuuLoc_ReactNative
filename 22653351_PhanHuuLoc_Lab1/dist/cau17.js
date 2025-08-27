"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log("Log:", message);
    }
}
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Hello world");
console.log("Same instance?", logger1 === logger2);
