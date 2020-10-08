function mirror(data) {
    let answer = []
    data.forEach(number => answer = [...answer, number])
    answer.sort((a,b) => a - b)
    let flip = answer.slice(0, answer.length - 1)
    return answer.concat(flip.reverse())
}