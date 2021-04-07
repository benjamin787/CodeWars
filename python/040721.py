# mine
def square_sum(numbers):
  n = 0
  for x in numbers:
    n += x*x
  return n

# better
def squares(numbers):
  return sum(x ** 2 for x in numbers)