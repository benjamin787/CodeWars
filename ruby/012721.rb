def count_bits n
    n.to_s(2).delete('0').length
end