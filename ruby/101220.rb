def filter_list(list)
    list.select { |item| item.is_a? Integer }
end