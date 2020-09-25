const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = "";
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      members[i] = members[i]
        .toUpperCase()
        .split("")
        .filter((item) => item.charCodeAt() >= 65 && item.charCodeAt() <= 90)
        .join("");
      dreamTeam += members[i][0];
    }
  }
  let resArr = dreamTeam.split("");
  let str = resArr
    .map((item) => item.charCodeAt())
    .sort((a, b) => a - b)
    .map((item) => String.fromCharCode(item))
    .join("");
  return str;
};
