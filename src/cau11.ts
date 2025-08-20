class Animal {
  name: string;
  constructor(name: string) { this.name = name; }
  move(): void { console.log(`${this.name} is moving`); }
}

class Dog extends Animal {
  bark(): void { console.log(`${this.name} says: Woof!`); }
}

class Cat extends Animal {
  meow(): void { console.log(`${this.name} says: Meow!`); }
}

// Test
const dog = new Dog("Buddy");
dog.move(); dog.bark();

const cat = new Cat("Kitty");
cat.move(); cat.meow();
