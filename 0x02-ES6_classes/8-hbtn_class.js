export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    // override valueOf to return this._size
    return this._size;
  }

  toString() {
    // override toString to return this._location
    return this._location;
  }
}
