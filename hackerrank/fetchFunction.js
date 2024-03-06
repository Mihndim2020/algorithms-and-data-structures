// const requestManager = async (url, options = {}, attemps = 3) => {
//   let delay = 1000;
//   fetch(url).then((response) => {
//     if (attemps > 0 && !response) {
//       attemps -= 1;
//       delay *= 5;
//       setTimeout(() => {
//         requestManager(url, attemps);
//       }, delay);
//     } else {
//       return response;
//     }
//   });
// };

const requestManager = (url, options = {}, attemps = 3) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(resolve)
      .catch((error) => {
        const isLastAttemp = attemps === 1;
        if (isLastAttemp) {
          return reject(error);
        }
        setTimeout(() => {
          requestManager(url, options, attemps - 1)
            .then(resolve)
            .catch(reject);
        }, 3000);
      });
  });
};

requestManager("https://foo.com")
  .then((response) => {
    console.log("Response", response);
  })
  .catch((error) => {
    console.log("Error", error);
  });
