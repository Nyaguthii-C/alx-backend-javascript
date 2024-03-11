class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  // return a new object of the class
  cloneCar() {
    const Model = this.constructor[Symbol.species];
    return new Model();
  }
}

export default Car;
