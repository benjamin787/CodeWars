const justify = (str, len) => {
  return str.split(" ").reduce((memo, word) => {
    if ((word.length + memo.length + 1) == len) {
      return memo + " " + word + "\n"
    } else if ((word.length + memo.length + 1) > len) {
      while (memo.length < len) {
        memo.replace(/\w\s\w/, /\w\s{2}\w/)
      }
      return memo + "\n" + word
    } else return memo + " " + word
  }).join("")
}