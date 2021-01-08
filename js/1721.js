function isSolved(board) {
    let full = true 
    const allEqual = arr => arr.every(i => i === arr[0])
    const diagonals = [[board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]]
        
    for (let x = 0; x < 3; x++) {
        if (allEqual(board[x]) && board[x][0] != 0) return board[x][0]

        if (board[0][x] === board[1][x] 
            && board[0][x] === board[2][x]
            && board[0][x] != 0)
                return board[0][x]

        if (board[x].includes(0)) full = false
    }
    
    if (allEqual(diagonals[0]) || allEqual(diagonals[1])) {
        return (board[1][1] === 0
            ? -1
            : board[1][1]
        )
    }
    return full ? 0 : -1
}