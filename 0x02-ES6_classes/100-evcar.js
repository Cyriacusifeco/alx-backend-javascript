/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
