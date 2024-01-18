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