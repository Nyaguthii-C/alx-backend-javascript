/**
When the class is cast into a Number, it should return the size.
When the class is cast into a String, it should return the location.
* */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return this._location;
    if (hint === 'number') return this._size;
    return 1; // for eslint
  }
}
