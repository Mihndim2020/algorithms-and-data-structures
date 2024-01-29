const binarySearch = (arr, target) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middlePointer;
  while (leftPointer <= rightPointer) {
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    if (arr[middlePointer] === target) {
      return middlePointer;
    } else if (target < arr[middlePointer]) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }
  return -1;
};
