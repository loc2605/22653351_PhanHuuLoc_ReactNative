"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    items = [];
    add(item) { this.items.push(item); }
    getAll() { return this.items; }
}
const repo = new Repository();
repo.add("Item1");
repo.add("Item2");
console.log(repo.getAll());
