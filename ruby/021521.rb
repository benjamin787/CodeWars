# mine
def isPrime num
  if [2,3,5,7].include? num
    return true
  elsif num < 2 || num % 5 == 0 || num.digits.sum % 3 == 0 || (num.even? && num > 2)
    return false
  else
    i = 7
    while i < Math.sqrt(num) + 1
      if num % i == 0
        return false
      end
      i += 2
    end
  end
  return true
end


# ugh this one is beautiful
def isPrime(num)
  num < 2 ? false : (2..Math.sqrt(num)).none?{|i| num%i == 0}
end


# this one feels this cheating
require 'prime'

def isPrime num
  Prime.prime? num
end