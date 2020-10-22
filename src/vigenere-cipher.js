const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, gama) {
    //let alphabeter = ["А", "Б", "В", "Г", "Ґ", "Д", "Е", "Є", "Ж", "З", "И", "І", "Ї", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ь", "Ю", "Я", "_", "0", "1", "2", "3", "5", "6", "7", "8", "9",];
    // let gama = "БРАТИСЛАВ";
    // let message = "НЕРЮНГРІ_230_КМ";
    let alphabeter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    gama = gama.split('');
    message = message.split('');
    let sum = 1;
    for (let i = 0; i < message.length; i++) {
      if (sum <= gama.length) {
        gama[i] = gama[sum - 1]
      }
      else {
        sum = sum - gama.length;
        gama[i] = gama[sum - 1];
      }
      sum++;
    }
    let messageNumOfSimbol = [];
    let gamaNumOfSimbol = [];
    let sumOfSimbol = [];
    for (let i = 0; i < message.length; i++) {
      for (let j = 0; j < alphabeter.length; j++) {
        if (message[i] == alphabeter[j]) {
          messageNumOfSimbol[i] = j
        };
      }
    }
    for (let i = 0; i < gama.length; i++) {
      for (let j = 0; j < alphabeter.length; j++) {
        if (gama[i] == alphabeter[j]) {
          gamaNumOfSimbol[i] = j
        };
      }
    }
    for (let i = 0; i < message.length; i++) {
      sumOfSimbol[i] = (gamaNumOfSimbol[i] + 1) +
        (messageNumOfSimbol[i] + 1);
      if (sumOfSimbol[i] > alphabeter.length)
        sumOfSimbol[i] = sumOfSimbol[i] - alphabeter.length;
    }

    let newmessage = new Array(message.length);
    for (let i = 0; i < message.length; i++) {
      for (let j = 0; j < alphabeter.length; j++) {
        if (sumOfSimbol[i] == j + 1)
          newmessage[i] = alphabeter[j];
      }
    }

    return newmessage.join("");
  }
  decrypt(newmessage, gama) {
    let alphabeter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    gama = Array.from(gama);
    let message = Array.from(newmessage);
    let count = 1;
    for (let i = 0; i < message.length; i++) {
      if (count <= gama.length) {
        gama[i] = gama[count - 1]
      }
      else {
        count = count - gama.length;
        gama[i] = gama[count - 1];
      }
      count++;
    }
    let newMessageNumOfSimbol = [];
    for (let i = 0; i < newmessage.length; i++) {
      for (let j = 0; j < alphabeter.length; j++) {
        if (newmessage[i] == alphabeter[j]) {
          newMessageNumOfSimbol[i] = j
        };
      }
    }
    let gamaNumOfSimbol = [];
    for (let i = 0; i < gama.length; i++) {
      for (let j = 0; j < alphabeter.length; j++) {
        if (gama[i] == alphabeter[j]) {
          gamaNumOfSimbol[i] = j
        };
      }
    }
    let difMassAndGama = [];
    for (let i = 0; i < newmessage.length; i++) {

      difMassAndGama[i] = (newMessageNumOfSimbol[i] + 1) -
        (gamaNumOfSimbol[i] + 1);
      if (difMassAndGama[i] < 0)
        difMassAndGama[i] = difMassAndGama[i] + alphabeter.length;
    }
    for (let i = 0; i < message.length; i++) {
      for (let j = 0; j < alphabeter.length; j++) {
        if (difMassAndGama[i] == j + 1)
          message[i] = alphabeter[j];
      }
    }
    return message.join("");
  }

}

module.exports = VigenereCipheringMachine;
