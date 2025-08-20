"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayInfo() {
        console.log(`Sản phẩm: ${this.name}, Giá: ${this.price}`);
    }
}
const products = [
    new Product("Bút", 20),
    new Product("Sách", 150),
    new Product("Áo thun", 120),
    new Product("Cặp", 80),
    new Product("Điện thoại", 500)
];
const filteredProducts = products.filter(p => p.price > 100);
console.log("Các sản phẩm có giá > 100:");
filteredProducts.forEach(p => p.displayInfo());
