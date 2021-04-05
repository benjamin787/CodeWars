const topThreeWords = text => {
  let counted = text.toLowerCase().split(" ").reduce((memo, word) => {
    memo[word] = memo[word] ? memo[word] + 1 : 1
    return memo
  }, {})
  return Object.entries(counted)
    .sort((a, b) => {
      if (a[1] < b[1]) return +1
      else if (a[1] > b[1]) return -1
      else return 0
    }).map(word => word[0])
    .filter(word => /[a-z]/.test(word))
    .slice(0, 3)
}