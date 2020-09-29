const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  /* if (typeof str !== "string") {
    str = str.toString();
  }
  if (options.addition === undefined) {
    return str;
  }*/
  /*if (typeof options.addition !== "string") {
    options.addition = options.addition.toString();
  }*/
  let additional_part = "";
  if (options.addition !== undefined) {
    additional_part =
      (options.addition + "" + options.additionSeparator).repeat(
        options.additionRepeatTimes - 1
      ) + options.addition;
  }
  let res =
    (str + additional_part + options.separator).repeat(
      options.repeatTimes - 1
    ) +
    str +
    additional_part;
  return res;
  /*if (
    options.repeatTimes === undefined ||
    options.additionRepeatTimes === undefined
  ) {
    return str;
  }
  return
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    str += options.addition + options.additionSeparator;
  }
  str = str.slice(0, str.length - options.additionSeparator.length);
  let resStr = "";
  for (let i = 0; i < options.repeatTimes; i++) {
    resStr += str + options.separator;
  }
  return resStr.slice(0, resStr.length - options.separator.length);
};
*/
};
