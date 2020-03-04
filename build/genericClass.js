"use strict";
class List {
    constructor(...data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
    addData(value) {
        this._data.push(value);
    }
    addMultiple(...value) {
        this._data.push(...value);
    }
}
let mylist = new List(1, 2, 3, 4, 5);
mylist.addData(6);
mylist.addMultiple(7, 8, 9, 10);
console.log(mylist.getData());
let random = new List(1, 2, "hello");
console.log(random.getData());
