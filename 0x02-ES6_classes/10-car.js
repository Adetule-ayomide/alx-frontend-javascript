export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') throw new TypeError('brand must be a string');
    if (typeof motor !== 'string') throw new TypeError('motor must be a string');
    if (typeof color !== 'string') throw new TypeError('color must be a string');

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = Object.create(this.constructor.prototype);
    clone._brand = undefined;
    clone._motor = undefined;
    clone._color = undefined;
    return clone;
  }
}
