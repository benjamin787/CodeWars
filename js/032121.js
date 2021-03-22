
// me
const rot13 = text => {
  return text.split("").map(char => {
    if (/[a-zA-Z]/.test(char)) {
      let num = char.charCodeAt(0)
      if (
        (num > 64 && num < 78) ||
        (num > 96 && num < 110)
      )
        return String.fromCharCode(char.charCodeAt(0) + 13)
      else return String.fromCharCode(char.charCodeAt(0) - 13)
    }
    else return char
  }).join("")
}

// not me
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

// not me
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}