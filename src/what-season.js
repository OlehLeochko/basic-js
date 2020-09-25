const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  function getSeason(date) {
    if (typeof date === "undefined") {
      return "Unable to determine the time of year!";
    }
    let month = date.getMonth() + 1;
    if (month === 12 || month < 3) return "winter";
    if (month >= 3 && month < 6) return "spring";
    if (month >= 6 && month < 9) return "summer";
    else if (month >= 9 && month < 12) return "fall";
    throw new Error();
  }
};
