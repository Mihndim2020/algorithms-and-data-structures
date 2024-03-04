const asyncParallel = (asynFuncs, callback) => {
  const resultArr = new Array(asynFuncs.length);
  let resultCounter = 0;

  asynFuncs.forEach((asyncFunc, index) => {
    asyncFunc((value) => {
      resultArr[index] = value;
      resultCounter++;

      if (resultCounter >= asynFuncs.length) {
        callback(resultArr);
      }
    });
  });
};
