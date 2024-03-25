class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
  calcAge(x) {
    const date = new Date();
    return x - this.year;
  }
}

const myCar = new Car("Renault", 2014);

console.log(myCar.age());
console.log(myCar.calcAge(2015));
