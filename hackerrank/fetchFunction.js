const fetchFunction = async (url, attemps) => {
  let delay = 1000;
  fetch(url).then((response) => {
    if (attemps > 0 && !response) {
      attemps -= 1;
      delay *= 5;
      setTimeout(() => {
        fetchFunction(url, attemps);
      }, delay);
    } else {
      console.log(response);
    }
  });
};
