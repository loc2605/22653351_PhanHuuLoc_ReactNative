class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
  }
}

const p1 = new Person("Lộc", 21);
p1.displayInfo();
