fetch("url")
  .then((response) => response.json())
  .then((data) => console.log("Success", data))
  .catch((error) => console.log(error));
