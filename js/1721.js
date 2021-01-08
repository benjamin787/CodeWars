function isSolved(board) {
    const allEqual = arr => arr.every(i => i === arr[0])
    const diagonals = [[board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]]
    if (allEqual(diagonals[0]) || allEqual(diagonals[1])) return board[1][1]
    for (let x = 0; x < 3; x++) {
        if (board[x].includes(0)) return -1
        if (allEqual(board[x])) return board[x][0]
        if (board[0][x] === board[1][x] && board[0][x] === board[2][x]) return board[0][x]
    }
    return 0
}

function isSolved(board) {
    let answer = 99
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (board[x][y] === 0) return -1
            else if (board[x][y] == board[x][y+1] && board[x][y] == board[x][y+2]) {
                answer = board[x][y]
            } else if (board[x][y] == board[x+1][y] && board[x][y] == board[x+2][y]) {
                answer = board[x][y]
            }
            if (answer != 99) return answer
        }
    }
    return (answer === 99 ? 0 : answer)
}