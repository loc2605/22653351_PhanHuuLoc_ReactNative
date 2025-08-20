"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        if (newName.trim().length > 0) {
            this.name = newName;
        }
        else {
            console.log("Tên không hợp lệ!");
        }
    }
}
const user = new User("Lộc");
console.log(user.getName());
user.setName("Phan Hữu Lộc");
console.log(user.getName());
user.setName("");
