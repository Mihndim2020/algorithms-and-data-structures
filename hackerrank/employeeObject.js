var Employee = function (id, name) {
  if (!id || !name) {
    throw new Error("Employee id and name are mandatory");
  }
  this.id = id;
  this.name = name;
};

Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};
Employee.prototype.getSalary = function () {
  return this.salary;
};
Employee.prototype.getId = function () {
  return this.id;
};
Employee.prototype.getName = function () {
  return this.name;
};

var Manager = function (params) {
  Employee.apply(this, arguments);
};

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.setSalary = function (salary) {
  this.salary = salary;
};
