function narcissistic(value) {
    return ( value == value.toString().split('')
    .reduce((sum, i) => sum + i**(value.toString().length), 0)
    )
}