const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    if (!reverse) {
      this._reverse = false;
    }
    else {
      this._reverse = reverse;
    }

  }
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error();
    }
    let lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    //let message = text.split("").filter(item => (lang.includes(item)) === true).join("");
    let message = "";
    text = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        message += text[i];
      }
    }
    if (key.length < message.length) {
      let len = Math.floor(message.length / key.length);
      key = key.repeat(len);
      let k = message.length % key.length;
      key = key + key.slice(0, k)
    }
    let res = [];
    message = message.toUpperCase().split("").map(item => lang.indexOf(item));
    key = key.toUpperCase().split("").map(item => lang.indexOf(item));
    for (let i = 0; i < message.length; i++) {
      if ((message[i] + key[i]) >= lang.length) {
        res.push(message[i] + key[i] - lang.length)
      }
      else {
        res.push(message[i] + key[i])
      }
    }
    res = res.map(item => item = lang[item]);
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) < 65 || text.charCodeAt(i) > 90) {
        res.splice(i, 0, text[i]);
      }
    }
    //res. 
    return this._reverse === false ? res.join("") : res.reverse().join("");
  }
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error();
    }
    let lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    //let message = text.split("").filter(item => (lang.includes(item)) === true).join("");
    let message = "";
    text = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        message += text[i];
      }
    }
    if (key.length < message.length) {
      let len = Math.floor(message.length / key.length);
      key = key.repeat(len);
      let k = message.length % key.length;
      key = key + key.slice(0, k)
    }
    let res = [];
    message = message.toUpperCase().split("").map(item => lang.indexOf(item));
    key = key.toUpperCase().split("").map(item => lang.indexOf(item));
    for (let i = 0; i < message.length; i++) {
      if (message[i] >= key[i]) {
        res.push(message[i] - key[i])
      }
      else {
        res.push(message[i] + 26 - key[i])
      }
    }
    res = res.map(item => item = lang[item]);
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) < 65 || text.charCodeAt(i) > 90) {
        res.splice(i, 0, text[i]);
      }
    }
    return this._reverse === false ? res.join("") : res.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;

/*for (let i = 0; i < message.length; i++) {
  if (message[i] === " ") {
    res.push(" ");
    i++
  }
  if ((message[i] + key[i]) > lang.length) {
    res.push(message[i] + key[i] - lang.length)
  }
  else {
    res.push(message[i] + key[i])
  }
}
return res.map(item => item = lang[item]).join("");
}*/