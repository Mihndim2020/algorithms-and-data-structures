function timeConversion(s) {
  // Write your code here
  let toArray = s.split(":");
  console.log(toArray);
  if (s.slice(-2) === "AM") {
    return `${parseInt(toArray[0]) % 12}:${toArray[1]}:${toArray[2].slice(
      0,
      2
    )}`;
  } else {
    return `${(parseInt(toArray[0]) % 12) + 12}:${
      toArray[1]
    }:${toArray[2].slice(0, 2)}`;
  }
}
