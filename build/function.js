"use strict";
// function ts
function getName() {
    return "Yusril Izza Aulia";
}
function getAge() {
    return 21;
}
function printMe() {
    console.log(`My Name is ${getName()}`);
    console.log(`My age is ${getAge()}`);
}
// printMe();
///////// argument types
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 5));
const add = (a, b) => {
    return a + b;
};
// console.log(add(5, 10));
///////// default paramater
const fullname = (first, last = "Izza") => {
    return first + " " + last;
};
// console.log(fullname("Yusril"));
// optional paramater
const helloWorld = (name, message) => {
    return `Hello ${name} !, ${message}`;
};
console.log(helloWorld("Yusril Izza"));
