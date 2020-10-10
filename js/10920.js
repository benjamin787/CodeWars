function triangle(row) {

    const results = {
        'BB' : 'B',
        'BG' : 'R',
        'BR' : 'G',
        'GB' : 'R',
        'GG' : 'G',
        'GR' : 'B',
        'RB' : 'G',
        'RG' : 'B',
        'RR' : 'R',
    }

    let answer = []

    if (row.length === 1) {
        return row[0]
    } else {
        for (let i = 0; i < (row.length - 1); i++) {
            answer.push(results[row[i].concat(row[i+1])])
        }
    }

    return triangle(answer)
}