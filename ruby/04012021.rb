
def solution(roman)
  dict = {
    "I": 1, "V": 5, "X": 10, "L": 50,
    "C": 100, "D": 500, "M": 1000
  }
  roman.chars.map{|i| dict[i]}.reduce{|x,y| x < y ? y-x : x+y}
end
