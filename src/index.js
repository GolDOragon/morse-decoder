const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  function morse_to_english(num_str) {
    if (num_str == "**********") return " ";

    let morse = "";
    for (let i = 0; i < num_str.length; i += 2) {
      let symbol = num_str.substr(i, 2);
      if (symbol == 10) morse += ".";
      else if (symbol == 11) morse += "-";
    }
    return MORSE_TABLE[morse];
  }

  let english_str = "";

  for (let i = 0; i < expr.length; i += 10) {
    let letter = morse_to_english(expr.substr(i, 10));
    english_str += letter;
  }
  return english_str;
}

module.exports = {
  decode
};
