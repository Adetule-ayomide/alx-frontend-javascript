import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new typeError('floors must be a number');
    }
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors'
  }
}