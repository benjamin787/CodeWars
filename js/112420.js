const sumIntervals = intervals => {
    let max = intervals.sort()[0][1];
    let min = intervals.sort()[0][0];
    return intervals.sort().reduce((sum, n) => {
        if (n[0] > max) {
            sum += n[1] - n[0]
        } else {
            sum = n[1] - min
        }
        [min, max] = n
        return sum
    }, 0)
}