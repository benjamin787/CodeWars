def is_valid_walk(walk)
    if walk.count != 10
      return false
    elsif !location(walk)
      return false
    else
      return true
    end
end
  
def location(walk)
  if (walk.count("n") == walk.count("s")) && (walk.count("e") == walk.count("w"))
    return true
  end
end 