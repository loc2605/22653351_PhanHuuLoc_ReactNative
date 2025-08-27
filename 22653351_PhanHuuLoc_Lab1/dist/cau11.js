"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) { this.name = name; }
    move() { console.log(`${this.name} is moving`); }
}
class Dog extends Animal {
    bark() { console.log(`${this.name} says: Woof!`); }
}
class Cat extends Animal {
    meow() { console.log(`${this.name} says: Meow!`); }
}
// Test
const dog = new Dog("Buddy");
dog.move();
dog.bark();
const cat = new Cat("Kitty");
cat.move();
cat.meow();
