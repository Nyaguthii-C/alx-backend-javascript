class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  //return a new object of the class
  cloneCar() {
    const model = this.constructor[Symbol.species];
    return new model();
  }
}

export default Car;
