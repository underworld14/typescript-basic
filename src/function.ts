// function ts

function getName(): string {
  return "Yusril Izza Aulia";
}

function getAge(): number {
  return 21;
}

function printMe(): void {
  console.log(`My Name is ${getName()}`);
  console.log(`My age is ${getAge()}`);
}

// printMe();

///////// argument types

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(10, 5));

// function as type
type Tambah = (a: number, b: number) => number;

const add: Tambah = (a, b) => {
  return a + b;
};

// console.log(add(5, 10));

///////// default paramater
const fullname = (first: string, last: string = "Izza"): string => {
  return first + " " + last;
};

// console.log(fullname("Yusril"));

// optional paramater
const helloWorld = (name: string, message?: string): string => {
  return `Hello ${name} !, ${message}`;
};

console.log(helloWorld("Yusril Izza"));
