const sumPairs = (ints, s) => {
  if (!Number.isInteger(s)) return undefined
  else {
    let complements = new Object;
    console.log('s', s)
    if (s > 0) {
      for (let t = s; t >= 0; t--) {
        complements[t] = s-t
      }
    } else if (s < 0) {
      for (let t = s; t <= 0; t++) {
        complements[t] = s-t
      }
    }
    
    console.log('comps', complements)
    let parts = Object.keys(complements).filter(part => {
      return ints.includes(+part) && ints.includes(complements[part])
    })
    console.log('parts', parts)
    return (parts.length > 0
      ? [parseInt(parts[0]), complements[parts[0]]]
      : undefined
    )
  }
}

const sumPairs = (ints, s) => {
  if (!Number.isInteger(s)) return undefined
  else {
    let pairs = ints.reduce((memo, part, i, source) => {
      if (source.includes(s-part)) memo.push(part)
      return memo
    }, [])
    console.log('pairs', pairs)
    if (!pairs) return undefined 
    switch (pairs.length) {
      case 0: 
        return undefined
        break;
      case 1:
        return [pairs[0], pairs[0]]
        break;
      case 2:
        return pairs
        break;
      case 3:
        return pairs.filter(part => part != s/2)
        break;
      default:
        let x = pairs.length/2
        return [pairs[x-1], pairs[x]]
    }
  }
}

// failed