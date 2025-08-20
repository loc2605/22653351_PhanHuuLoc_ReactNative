interface Animal {
  name: string;
  sound(): string;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): string {
    return "Woof!";
  }
}

const myDog: Animal = new Dog("Buddy");
console.log(myDog.name);
console.log(myDog.sound()); 