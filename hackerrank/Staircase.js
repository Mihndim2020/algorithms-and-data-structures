// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces. Write a program that prints a staircase of size .

function staircase(n) {
  // Write your code here
  let stairs = new Array(n).fill(" ");
  for (let i = 0; i < n; i++) {
    stairs.shift();
    stairs.push("#");
    console.log(stairs.join(""));
    //  console.log(stairs.splice(n - (i+1), 1, "#").join(""));
  }
}

staircase(6);
