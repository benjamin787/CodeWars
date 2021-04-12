# mine
def is_valid_IP(text):
  octets = text.split(".")
  if len(octets) != 4: return False
  for num in octets:
    if (not num.isdigit() or
      not (0 <= int(num) <= 255) or
      (num[0] == "0" and len(num) > 1)
    ): 
      return False
  return True

# codewars top
def is_valid_IP1(strng):
  lst = strng.split('.')
  passed = 0
  for sect in lst:
    if sect.isdigit():
      if sect[0] != '0':
        if 0 < int(sect) <= 255:
          passed += 1
  return passed == 4

# two package options below

import re
def is_valid_IP2(strng):
    return bool(re.match(r'^((\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}(?=$)',strng))


import socket
def is_valid_IP3(addr):
    try:
        socket.inet_pton(socket.AF_INET, addr)
        return True
    except socket.error:
        return False
