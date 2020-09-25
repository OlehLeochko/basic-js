const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  if (
    typeof sampleActivity_ !== "string" ||
    parseFloat(sampleActivity) === false ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY ||
    parseFloat(sampleActivity) <= 0
  ) {
    return false;
  }
  let res =
    Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
    (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(res);
};
