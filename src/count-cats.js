const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0;
  for (let i = 0; i < matrix.length; i++) {
    number++;
  }
  return number;
  // remove line with error and write your code here
};
