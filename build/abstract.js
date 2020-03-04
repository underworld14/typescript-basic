"use strict";
// abstract class
class Vehicle {
    start() {
        console.log("brummm");
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
const honda = new Motorcycle();
honda.start();
