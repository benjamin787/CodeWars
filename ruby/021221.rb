# my answer
def anagrams word, words
  answer = []
  word.chars.permutation {|x| words.any?(x.join) ? answer << x.join : nil}
  return answer
end

# best answer
def anagrams(word, words)
  words.select { |w| w.chars.sort == word.chars.sort }
end