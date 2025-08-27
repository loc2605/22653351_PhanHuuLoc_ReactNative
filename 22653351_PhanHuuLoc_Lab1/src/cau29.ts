interface Movable {
  move(): void;
}

class Car implements Movable {
  move(): void { console.log("Car is driving"); }
}

class Robot implements Movable {
  move(): void { console.log("Robot is walking"); }
}

const car: Movable = new Car();
car.move();

const robot: Movable = new Robot();
robot.move()