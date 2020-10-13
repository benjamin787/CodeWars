function arrayDiff(a, b) {
    return a.filter(data => !b.includes(data))
}