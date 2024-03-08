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
    const constructor = this.constructor;
    return new constructor(this._brand, this._motor, this._color);
  }
}


class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);
