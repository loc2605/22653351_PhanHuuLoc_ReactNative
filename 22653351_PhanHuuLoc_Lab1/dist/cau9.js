"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Woof!";
    }
}
const myDog = new Dog("Buddy");
console.log(myDog.name);
console.log(myDog.sound());
