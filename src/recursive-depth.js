const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = [];
    if (arr.length == 0) return 1;
    arr.forEach((item) => {
      let count = 0;
      if (!Array.isArray(item)) {
        count = 1;
      } else count = 1 + this.calculateDepth(item);
      res.push(count);
    });
    //let k=res.length-1;
    return Math.max(...res);
  }
};
