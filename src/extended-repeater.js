// const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let arr = [];
  let arrAdd = [];

  let addRepeat = options.additionRepeatTimes || 1;
  let repeat = options.repeatTimes || 1;

  for (let j = 0; j < addRepeat; j++) {
    if (options.addition === null) {
      arrAdd.push(String(options.addition));
    } else {
      arrAdd.push(options.addition);
    }
  }

  let strAdd = arrAdd.join(options.additionSeparator || "|");

  for (let i = 0; i < repeat; i++) {
    arr.push(`${str}${strAdd}`);
  }

  return arr.join(options.separator || '+');
};