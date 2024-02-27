const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: false,
  },
  {
    id: 3,
    name: "Mike",
    isActive: true,
  },
];

const checkObjectProp = (name, arr) => arr.some((user) => user.name === name);

console.log(checkObjectProp("Jack", users));
