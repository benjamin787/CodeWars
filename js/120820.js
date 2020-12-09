const getPINs = observed => {
    const pad = [['1','2','3'],['4','5','6'],['7','8','9'],[null,'0',null]];
    let options = new Set();
    for (const num of observed.split('')) {
        let r = +(pad.findIndex(row => row.includes(num)))
        let c = +(pad[r].findIndex(col => col === num))
        for (let i of [0,-1,1]) {
            if (0 <= r+i < 4 && 0 <= c+i < 4) {
                options.add(pad[r+i][c])
                options.add(pad[r][c+i])
            }
        }
    }
    return [...options]
}