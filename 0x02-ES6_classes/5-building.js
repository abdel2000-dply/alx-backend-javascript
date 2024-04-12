export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    // Any subclass that doesn't override this method will inherit the version that throws an error.
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
