class People {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  getProfile(): string {
    return `My name is ${this.name}, My Age is ${this.age}`;
  }
}

class Admin extends People {
  write: boolean = true;
  read: boolean = true;
  phone: string;
  private _email: string = "";

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  static getRoleName(): string {
    return "Admin";
  }

  getRole(): { role: string; write: boolean; read: boolean } {
    return {
      role: "Admin",
      write: this.write,
      read: this.read
    };
  }

  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

let admin = new Admin("Admin", 21, "081233757");
admin.email = "izzaaulia691@gmail.com";

console.log(Admin.getRoleName());

// console.log(admin.getRole());
