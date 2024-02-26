const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 40,
  },
  {
    id: 2,
    name: "Julio",
    isActive: false,
    age: 25,
  },
  {
    id: 3,
    name: "Jay",
    isActive: true,
    age: 30,
  },
  {
    id: 4,
    name: "Jel",
    isActive: false,
    age: 32,
  },
];

users.sort((user1, user2) => (user1.age > user2.age ? -1 : 1));
const names1 = [];
const names = users.filter((user) => user.isActive).map((elem) => elem.name);
console.log(names1);
console.log(names);
