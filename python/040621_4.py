# mine
def find_uniq(arr):
  if arr[0] == arr[1]:
    n = list(filter(lambda x: x != arr[0], arr))
  else:
    n = [arr[1]] if arr[0] == arr[2] else [arr[0]]
  return n[0]

# codewars fav
def find_unique(arr):
  a, b = set(arr)
  return a if arr.count(a) == 1 else b

# ugh how did i miss this??
def find_uniqu(arr):
    a = sorted(arr)
    return a[0] if a[0] != a[1] else a[-1]