"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
    }
}
const p1 = new Person("Lộc", 21);
p1.displayInfo();
