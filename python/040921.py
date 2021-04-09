# mine; also codewars top
def find_nb(m):
  i = 1
  while m > 0:
    m -= i**3
    i += 1
  return i-1 if m == 0 else -1

# using package and better math. not mine

import math
def find_nb_p(m):
  n_canidate = int(math.floor(math.sqrt(2*math.sqrt(m))))
  if(n_canidate * (n_canidate + 1) / 2)**2 == m:
    return n_canidate
  else: 
    return -1
