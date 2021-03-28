const CustomError = require("../extensions/custom-error");

const variant = {
  "--double-next": 1,
  "--double-prev": 2,
  "--discard-next": 3,
  "--discard-prev": 4
};

module.exports = function transform(arr) {
  if(Array.isArray(arr) === false) {
    throw new Error();
  }

  const result = [];

  for(let i = 0; i < arr.length; i++) {
    if(variant[arr[i]]) {
      switch(variant[arr[i]]) {
        case 1:
          if(i < arr.length - 1) {
            result.push(arr[i + 1]);
          }
          break;
        case 2:
          if(i > 0) {
            result.push(result[result.length - 1]);
          }
          break;
        case 3:
          if(i < arr.length) {
            result.push(undefined);
            i++;
          }
          break;
        case 4:
          if(i > 0) {
            result.pop();
          }
          break;
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result.filter(item =>  item !== undefined);
};

// module.exports = function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error()
//   }
//   let array = [];
//   arr.forEach((elem, i) => {
//     if (array[i - 1] == '--discard-next') {
//       array[i] = ''; 
//       array.splice(i - 1, 1);
//     } else if (typeof (elem) == 'number') {
//       array.push(elem);
//     } else if (elem == '--discard-prev' && i != 0) {
//       array.splice(i - 1, 1)
//     } else if (elem == '--double-prev' && i != 0) {
//       array.push(array[i - 1]);
//     } else if (elem == '--double-next' && i != arr.length - 1) {
//       array.push(arr[i + 1]);
//     } else if (i != arr.length - 1 && elem == '--discard-next') {
//       array.push(arr[i]);
//     }
//   })
//   return array.filter(item => item > 0);
// };



// --discard-next
// --discard-prev
// --double-next
// --double-prev
