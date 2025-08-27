"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    constructor(name) { this.name = name; }
    work() { console.log(`${this.name} is working`); }
}
class Manager extends Employee {
    manage() { console.log(`${this.name} is managing the team`); }
}
class Developer extends Employee {
    code() { console.log(`${this.name} is writing code`); }
}
const manager = new Manager("Alice");
manager.work();
manager.manage();
const dev = new Developer("Bob");
dev.work();
dev.code();
