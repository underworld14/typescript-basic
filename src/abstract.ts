// abstract class
abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log("brummm");
  }
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

class Car extends Vehicle {
  wheels: number = 4;
}

const honda = new Motorcycle();

honda.start();
