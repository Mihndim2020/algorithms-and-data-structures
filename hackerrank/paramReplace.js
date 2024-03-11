const replaceParamsUrl = (initialUrl, arr) => {
  console.log(initialUrl.split("/"));
  console.log(arr);
};

const initialUrl = "/posts/:postId/comments/:commentId";

const resultUrl = replaceParamsUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);

console.log(resultUrl);
