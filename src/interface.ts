interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Macbook implements Laptop {
  name: string;
  isBacklight: boolean = true;

  constructor(name: string) {
    this.name = name;
  }

  on() {
    console.log(`${this.name} screen on`);
  }

  off() {
    console.log(`${this.name} screen on`);
  }
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean = true;

  constructor(name: string) {
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
