const convertTo24hours = (time) => {
  let hours = time.split(":")[0].padStart(2, "0");
  let minutes = time.split(":")[1].slice(0, -2).padStart(2, "0"); // padStart pads the current string with multiple strings if needed...
  // let amPm = time.split(":")[1].slice(-2);

  //return amPm === "AM"
  return time.endsWith("AM")
    ? `${(hours % 12).toString().padStart(2, "0")}:${minutes}`
    : `${(hours % 12) + 12}:${minutes}`;
};

console.log(convertTo24hours("12:10AM"));
console.log(convertTo24hours("5:8AM"));
console.log(convertTo24hours("12:33PM"));
console.log(convertTo24hours("01:59PM"));
console.log(convertTo24hours("11:8PM"));
console.log(convertTo24hours("10:02PM"));
