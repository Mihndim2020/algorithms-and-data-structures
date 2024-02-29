class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Employee id and name are mandatory!");
    }
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }
}

const employee = new Employee("1", "Jay");
employee.setSalary(95000);

console.log(employee);
