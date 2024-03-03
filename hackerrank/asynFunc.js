const asynFunc = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 3000);
};

asynFunc((message) => {
  console.log("Callback", message);
});
