const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  arr.forEach((item, index) => res.push(item));
  for (let i = 0; i < res.length; i++) {
    if (res[i] == "--double-next") {
      res[i] = res[i + 1];
    }
    if (res[i] == "--double-prev") {
      res[i] = res[i - 1];
    }
    if (res[i] == "--discard-next") {
      res.splice(i + 1, 2);
    }
    if (res[i] == "--discard-prev") {
      res.splice(i - 1, 2);
    }
  }
  return res;
};
