"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathUtil {
    static add(a, b) { return a + b; }
    static subtract(a, b) { return a - b; }
    static multiply(a, b) { return a * b; }
    static divide(a, b) { return a / b; }
}
console.log("Add:", MathUtil.add(5, 3));
console.log("Divide:", MathUtil.divide(10, 2));
