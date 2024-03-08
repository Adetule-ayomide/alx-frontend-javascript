export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('size must be a number');
    if (typeof location !== 'string') throw new TypeError('location must be a string');

    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}


const hc = new HolbertonClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));
