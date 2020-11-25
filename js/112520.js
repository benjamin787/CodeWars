const whoIsNext = (names, n) => {
    let i = 1;
    let L = names.length;
    while (n > L) {
        n -= L
        i *= 2
        L *= 2
    }
    return names[+((n-1)/i)]
}