# mine
def split_in_two(test):
  b = []
  if len(test) % 2 != 0: last = f"{test[-1]}_"
  for i, char in enumerate(test):
    duo = f"{test[i-1]}{char}"
    if i % 2 == 1: b.append(duo)

  if last: b.append(last)
  return b
    
# codewars top
def solution(s):
  result = []
  if len(s) % 2:
    s += '_'
  for i in range(0, len(s), 2):
    result.append(s[i:i+2])
  return result

# package answer
import re
def p_solution(s):
  return re.findall(".{2}", s + "+")