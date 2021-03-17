def to_camel_case(text)
  if text.length.positive?
    text.split(/[-|_]/).reduce do |memo, clause|
      memo.concat clause.capitalize
    end
  else
    text
  end
end

def not_mine(str)
  str.gsub(/[-_](.)/) {"#{$1.upcase}"}
end

def also_not_mine(str)
  head, *tail = str.split(/[-_]/)
  head.to_s + tail.map(&:capitalize).join
end

def again(str)
  str.split(/[-_]/).map.with_index{|e, i| i == 0 ? e : e.capitalize}.join
end