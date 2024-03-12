class Car {
  constructor(brand) {
    this._carmodel = brand;
  }

  get carname() {
    return this._carmodel;
  }

  set carname(x) {
    this._carmodel = x;
  }
}
