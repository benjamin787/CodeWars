Array.prototype.permutations = n => {
    if (!Number.isInteger(n)) throw new Error('bummer')
    if (n === 0 || n > this.length) return [[]]

    let answer = [], addOn = [];
    for (let i = 0; i < this.length; i++) {
        addOn.push(this[i])
        for (let j = 0; j < this.length; j++) {
            if (i !== j && addOn.length < n) {
                addOn.push(this[j])
            }
        }
        answer.push(addOn)
        addOn = []
    }
    return answer.filter((e, x, arr) => arr.indexOf(e) === x)
}

//below is not mine

Array.prototype.permutations = function(n) {
    if (n < 0 || (n|0) !== n) throw new Error();
    if (n > this.length) return [];
    if (n === 0) return [[]];
    let result = [];
    let seen = new Set();
    for (let i = 0; i < this.length; i++) {
        if (seen.has(this[i])) continue;
        result.push(...this.slice(0, i).concat(this.slice(i+1)).permutations(n-1).map(x => [this[i], ...x]));
        seen.add(this[i]);
    }
    return result;
}