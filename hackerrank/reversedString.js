const reverseString = (str) => {
  let nonAlpha = {};
  let toReverse = "";
  let regex = /^[a-zA-Z]+$/;
  for (let i = 0; i < str.length; i++) {
    if (!regex.test(str[i])) {
      nonAlpha[i] = str[i];
    } else {
      toReverse += str[i];
    }
  }
  let reversed = toReverse.split("").reverse().join("");

  for (let [key, value] of Object.entries(nonAlpha)) {
    console.log(key, value);
    reversed.slice(0, parseInt(key)) + value + reversed.slice(parseInt(key));
  }
  return reversed;
};
