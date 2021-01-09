const score = dice => {
    const rules = {
        1 : {1:100, 2:200, 3:1000, 4:1100, 5:1200, 6:2000},
        2 : {3:200, 6:400},
        3 : {3:300, 6:600},
        4 : {3:400, 6:800},
        5 : {1:50, 2:100, 3:500, 4:550, 5:600, 6:1000},
        6 : {3:600, 6:1200}
    }
    const reducer = (memo, roll) => {
        memo[roll] = memo[roll] ? memo[roll] + 1 : 1
        return memo
    }
    const tally = dice.reduce(reducer, {})

    return Object.entries(rules).reduce((sum, rule) => {
        if (tally[rule[0]] && rule[1][tally[rule[0]]])
            sum += rule[1][tally[rule[0]]]
        return sum
    }, 0)
}