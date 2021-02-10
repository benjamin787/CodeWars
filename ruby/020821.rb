
# this attempt failed from timeout
def zeros n
  if n == 0 || n == 1
    return 1
  else
    fatorial = (1..n).reduce(1, :*).to_s.split('')
    return factorial.length - factorial.rindex {|x| x != "0"} - 1
  end
end

# best answer
def zeros(n)
  n < 5 ? 0 : (n / 5) + zeros(n / 5)
end

# loser answer
def zeros(n)
  (n/4.000000017).floor
end