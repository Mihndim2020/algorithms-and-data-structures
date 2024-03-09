const toTitleCase = (str) => {
  let titleCase = "";
  return str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(0, word.length + 1);
  });
};

console.log(toTitleCase("the game changers and the change makers"));
