const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  if (Array.isArray(arr) === false) {
    throw new Error();
  }
  //arr.forEach((item, index) => res.push(item));
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "--double-next") {
      res[i] = res[i + 1];
    }
    if (res[i] === "--double-prev") {
      if (res[i - 1]) {
        res[i] = res[i - 1];
      } else {
        res.splice(0, 1);
      }
    }
    if (res[i] === "--discard-next") {
      res.splice(i, 2);
    }
    if (res[i] === "--discard-prev") {
      if (res[i - 1]) {
        res.splice(i - 1, 2);
      } else {
        res.splice(i, 1);
        res[res.length] = res.length + 1;
      }
    }
  }
  return res;
};
