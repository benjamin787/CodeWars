const moveZeros = list => {
    const filtered = list.filter(el => el !== 0)
    while ((list.length - filtered.length) > 0) filtered.push(0)
    return filtered
}

const moveZeros = list => {
    return list
        .filter(nonZeros => nonZeros !== 0)
        .concat(list.filter(zeros => zeros === 0))
}