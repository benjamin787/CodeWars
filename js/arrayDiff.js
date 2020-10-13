function arrayDiff(a, b) {
    b.forEach(test => {
        return a.filter(result => result !== test);
    });
}
