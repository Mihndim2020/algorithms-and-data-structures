const saveInput = (name) => {
  console.log("Welcome ", name);
};

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const processChange = debounce(saveInput, 2000);
processChange("foo");
processChange("foo");
processChange("foo");
