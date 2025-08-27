"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
    displayInfo() {
        console.log(`Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }
}
const r1 = new Rectangle(5, 10);
r1.displayInfo();
