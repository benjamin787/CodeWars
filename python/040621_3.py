# mine
def friend(x):
  def check(person):
    return True if person.length == 4 else False
  return list(filter(check, x))

# codewars favorite
def friends(x):
  return [f for f in x if len(f) == 4]

# most common
def is_friend(x):
  names = []
  for name in x:
    if len(name) == 4:
      names.append(name)
  return names