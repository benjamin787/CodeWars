const moveZeros = list => {
    const filtered = list.filter(el => el !== 0)
    while ((list.length - filtered.length) > 0) filtered.push(0)
    return filtered
}