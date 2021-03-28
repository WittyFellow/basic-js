// const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return chainMaker.arr.length - 1;
  },

  addLink(value) {
    chainMaker.arr.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (!position || typeof position !== 'number' || position < 0 || position > this.getLength()) {
      chainMaker.arr = [];
      throw "Error";
    } else {
      chainMaker.arr.splice(position - 1, 1);
      return chainMaker;
    }
  },

  reverseChain() {
    chainMaker.arr.reverse();
    return chainMaker;
  },

  finishChain() {
    let result = chainMaker.arr.join(`~~`);
    chainMaker.arr = [];
    return result;
  }
};

module.exports = chainMaker;
