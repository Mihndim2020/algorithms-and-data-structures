const requestManager = async (url, options = {}, attemps = 3) => {
  let delay = 1000;
  fetch(url).then((response) => {
    if (attemps > 0 && !response) {
      attemps -= 1;
      delay *= 5;
      setTimeout(() => {
        requestManager(url, attemps);
      }, delay);
    } else {
      return response;
    }
  });
};
