const RomanNumerals = {
    
    toRoman = digits => {
        Array.from(String(digits), Number)

            .reduce((memo, x, i, arr) => {
                let part = x.concat('0'.repeat(+(arr.length - i + 1)))
                Object.keys(convert).reduce((max, y) => max < y ? max : y, part)
                    ?
                    :
                return memo.concat(convert[x])
            }, [])
        
        return 
    },

    fromRoman = numerals => {
        return 
    }
}

const convert = {
    1 : 'I',
    5 : 'V',
    10 : 'X',
    50 : 'L',
    100 : 'C',
    500 : 'D',
    1000 : 'M'
}

// goal to reduce to array of num/char to sum/join at return