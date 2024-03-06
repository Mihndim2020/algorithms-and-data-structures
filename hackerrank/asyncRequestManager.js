const requestManager = async (url, options = {}, attemps = 3) => {
  try {
    const response = fetch(url, options);
    const data = await response;
    console.log(data);
  } catch (error) {
    if (attemps > 0) {
      console.log("Attemp !");
      setTimeout(() => {
        try {
          requestManager(url, options, attemps - 1);
        } catch (error) {
          console.log("Error", error);
        }
      }, 3000);
    }
    console.log("Error", error);
  }
};

requestManager("https://foo.com");
