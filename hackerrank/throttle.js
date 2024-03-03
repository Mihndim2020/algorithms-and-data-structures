const saveInput = (name) => {
  console.log("Welcome ", name);
};

const throttle = (funct, timeout = 200) => {
  let isWating = false;

  return (...args) => {
    if (!isWating) {
      funct.apply(this, args);
      isWating = true;
    }
    setTimeout(() => {
      isWating = false;
    }, timeout);
  };
};

const precessChange = throttle(saveInput, 3000);

setTimeout(() => {
  precessChange("Mih");
}, 1000);

setTimeout(() => {
  precessChange("Mih");
}, 2000);

setTimeout(() => {
  precessChange("Mih");
}, 2400);

setTimeout(() => {
  precessChange("Mih");
}, 3000);
