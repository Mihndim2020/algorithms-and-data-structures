const numbers = [3, 1, 4, 1, 5];

const sorted = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sorted(numbers));

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The hunger games", author: "Suzanne Collins" },
];

const sortedObj = (arr) => {
  return arr.sort((a, b) =>
    a.author.split(" ")[1] < b.author.split(" ")[1] ? -1 : 1
  );
};

console.log(sortedObj(books));
