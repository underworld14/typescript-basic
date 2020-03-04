function printData(value: any) {
  return value;
}

console.log(printData("Hello World").length);
console.log(printData(101).length);

// generic types
function outData<T>(value: T) {
  return value;
}

console.log(outData("hello World").length);
console.log(printData(101));
