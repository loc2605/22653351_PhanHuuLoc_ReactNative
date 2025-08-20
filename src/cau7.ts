class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    if (newName.trim().length > 0) {
      this.name = newName;
    } else {
      console.log("Tên không hợp lệ!");
    }
  }
}

const user = new User("Lộc");
console.log(user.getName());

user.setName("Phan Hữu Lộc");
console.log(user.getName());

user.setName("");
