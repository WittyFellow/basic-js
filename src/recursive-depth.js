const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let maxDepth = 1;
    
    arr.forEach(item => {
      let depth = 1;
      
      if (Array.isArray(item)) {
        depth = this.calculateDepth(item) + 1;
      }

      maxDepth < depth ? maxDepth = depth: maxDepth;

    });

    return maxDepth;
  }
};

