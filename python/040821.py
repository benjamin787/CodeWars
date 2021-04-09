# mine
def series_sum(n):
  x = 0
  if n == 0: return "0.00"
  for i in range(n):
    x += 1/(3*i+1)

  result = str(round(x, 2))
  return result if len(result) == 4 else result + "0"

# top
def serie_sum(n):
  return "{:.2f}".format(sum(1.0/(3 * i + 1) for i in range(n)))

def series_summ(n):
  sum = 0.0
  for i in range(0,n):
    sum += 1 / (1 + 3 * float(i))
  return "%.2f" % sum