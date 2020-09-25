const CustomError = require("../extensions/custom-error");

let chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(n) {
    this.arr.push(`( ${n} )`);
    return this;
  },
  removeLink(position) {
    if (
      position > this.arr.length ||
      position <= 0 ||
      typeof position !== "number" ||
      (position ^ 0) !== position
    ) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join("~~");
    this.arr = [];
    return res;
  },
};

module.exports = chainMaker;
