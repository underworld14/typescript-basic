"use strict";
class Macbook {
    constructor(name) {
        this.isBacklight = true;
        this.name = name;
    }
    on() {
        console.log(`${this.name} screen on`);
    }
    off() {
        console.log(`${this.name} screen on`);
    }
}
class Asus {
    constructor(name) {
        this.isGaming = true;
        this.name = name;
    }
    on() {
        console.log(`${this.name} screen on`);
    }
    off() {
        console.log(`${this.name} screen on`);
    }
}
let asusRog = new Asus("Asus ROG Zephyrus");
let mb101 = new Macbook("Macbook Pro MD101");
asusRog.on();
mb101.on();
