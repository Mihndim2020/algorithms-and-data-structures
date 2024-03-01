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

class Manager extends Employee {
  setDepartment(name) {
    this.department = name;
  }

  getDepartment() {
    return this.department;
  }
}

const employee = new Employee("1", "Jay");
employee.setSalary(95000);

const manager = new Manager("2", "Mih");
manager.setDepartment("Software Engineering");

console.log("Manager: ", manager);

console.log(employee);
console.log(employee.getSalary());
console.log(employee.getName());
