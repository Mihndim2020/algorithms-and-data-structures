const bubbleSort = (arr) => {
  let swap = false;
  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // temp = arr[i];
        // arr[i] = arr[i + 1];
        // arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap === true);
  return arr;
};
