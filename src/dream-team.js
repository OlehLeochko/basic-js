const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      dreamTeam += members[i][0];
    }
  }
  return dreamTeam;
};
