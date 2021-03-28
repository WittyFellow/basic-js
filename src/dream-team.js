// const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    return arr.map(el => typeof(el) === 'string' ? el.replace(/\s/g, '')[0].toUpperCase() : '').sort().join('');
  } else {
    return false;
  }
};


