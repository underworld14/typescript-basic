class List<T> {
  private _data: T[];

  constructor(...data: T[]) {
    this._data = data;
  }

  getData(): T[] {
    return this._data;
  }

  addData(value: T): void {
    this._data.push(value);
  }

  addMultiple(...value: T[]): void {
    this._data.push(...value);
  }
}

let mylist = new List<number>(1, 2, 3, 4, 5);
mylist.addData(6);
mylist.addMultiple(7, 8, 9, 10);

console.log(mylist.getData());

let random = new List<number | string>(1, 2, "hello");
console.log(random.getData());
