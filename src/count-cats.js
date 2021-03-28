const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let count = 0;
  array.filter(item => item.forEach(i => i == '^^' ? count++ : count));
  return count;
};
