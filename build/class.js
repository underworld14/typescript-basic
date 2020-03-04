"use strict";
class People {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    getProfile() {
        return `My name is ${this.name}, My Age is ${this.age}`;
    }
}
class Admin extends People {
    constructor(name, age, phone) {
        super(name, age);
        this.write = true;
        this.read = true;
        this._email = "";
        this.phone = phone;
    }
    static getRoleName() {
        return "Admin";
    }
    getRole() {
        return {
            role: "Admin",
            write: this.write,
            read: this.read
        };
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin("Admin", 21, "081233757");
admin.email = "izzaaulia691@gmail.com";
console.log(Admin.getRoleName());
// console.log(admin.getRole());
