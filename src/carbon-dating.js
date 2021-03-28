const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let l = sampleActivity < 15 && sampleActivity>0;
  if (typeof (sampleActivity) === 'string' && typeof (+sampleActivity) === 'number' && l) {
    let sample = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693);
    if(typeof(sample) === 'number' && sample != NaN){
      return sample;
    }
    else {
      return false;
    }
  } else {
    return false;
  }
}
