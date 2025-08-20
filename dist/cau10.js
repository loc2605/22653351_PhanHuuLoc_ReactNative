"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    owner;
    balance;
    accountNumber;
    constructor(owner, accountNumber, initialBalance = 0) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
}
const acc = new Account("Alice", "ACC12345", 1000);
console.log(acc.owner);
console.log(acc.accountNumber);
// console.log(acc.balance);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.getBalance());
