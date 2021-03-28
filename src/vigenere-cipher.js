const CustomError = require("../extensions/custom-error");

let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error();
    }
    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length/key.length)).toUpperCase();
    let i = 0;

    let str = message.split('').map((letter) => { 
      if (!letter.match(/[A-Z]/)) { 
        return letter; 
      }
      const keyLetter = key[i];
      const columnIndex = alph.indexOf(keyLetter);
      const rowIndex = alph.indexOf(letter);


      const index = rowIndex + columnIndex;

      const result = alph.slice(index-26)[0];

      i += 1;

      return result;
    });


    if (this.direct) {
      return str.join('');
    }
    return str.reverse().join('');
  }


  decrypt(message, key) {
    if (!message || !key) {
      throw Error();
    }
    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length/key.length)).toUpperCase();
    let i = 0;

    let str = message.split('').map((letter) => { 
      if (!letter.match(/[A-Z]/)) { 
        return letter; 
      }
      const keyLetter = key[i];
      const columnIndex = alph.indexOf(keyLetter);
      const rowIndex = alph.indexOf(letter);


      const index = (rowIndex + 26 - columnIndex)%26;
      const result = alph[index];

      i += 1;

      return result;
    });

    if (this.direct) {
      return str.join('');
    }
    return str.reverse().join('');
};
}
module.exports = VigenereCipheringMachine;
