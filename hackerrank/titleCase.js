const toTitleCase = (str) => {
  let titleCase = "";
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

console.log(toTitleCase("the game changers and the change makers"));
console.log(toTitleCase("HERE IS MY HANDLE, HERE IS MY SPOUT"));
