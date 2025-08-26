"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    move() { console.log("Car is driving"); }
}
class Robot {
    move() { console.log("Robot is walking"); }
}
const car = new Car();
car.move();
const robot = new Robot();
robot.move();
