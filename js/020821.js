//first attempt
const addBinary = (a, b) => ((a + b) >>> 0).toString(2)

//got it on the second
const addBinary = (a, b) => Math.abs(a+b).toString(2)