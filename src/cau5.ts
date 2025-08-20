class BankAccount {
  balance: number;

  constructor(balance: number = 0) {
    this.balance = balance;
  }

  // Nạp tiền
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Đã nạp: ${amount}, Số dư mới: ${this.balance}`);
    } else {
      console.log("Số tiền nạp phải lớn hơn 0.");
    }
  }

  // Rút tiền
  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền rút phải lớn hơn 0.");
    } else if (amount > this.balance) {
      console.log("Không đủ tiền trong tài khoản");
    } else {
      this.balance -= amount;
      console.log(`Đã rút: ${amount}, Số dư còn lại: ${this.balance}`);
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.withdraw(2000);
console.log(`Số dư hiện tại: ${bankAccount.getBalance()}`);
