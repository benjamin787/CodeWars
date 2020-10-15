function findOdd(integers) {
    let tally = {}
    let answer

    integers.forEach(integer => {
        tally[integer]
            ? tally[integer]++
            : tally[integer] = 1
    })

    for (const [key, value] of Object.entries(tally)) {
        value % 2 === 0 ? null : answer = key
    }
    
    return +answer
}