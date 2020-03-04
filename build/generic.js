"use strict";
function printData(value) {
    return value;
}
console.log(printData("Hello World").length);
console.log(printData(101).length);
// generic types
function outData(value) {
    return value;
}
console.log(outData("hello World").length);
console.log(printData(101));
