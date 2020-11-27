const perimeter = n => {
    let sequence = [1,1]
    for (let i = 0; i < n - 1; i++) {
        sequence.push(sequence[-1] + sequence[-2])
    }
    return 4 * sequence.reduce((sum, x) => sum + x, 0)
}