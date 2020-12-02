const pigIt = quote => {
    return (
        quote.split(' ').reduce((pigQuote, word) => {
            return pigQuote + word.slice(1) + word.charAt(0) + 'ay '
        }, '').slice(0, -1)
    )
}
const pigIt = quote => {
    let phrase = quote.split(' ').reduce((pigQuote, word) => {
        return pigQuote + word.slice(1) + word.charAt(0) + 'ay '
    }, '').slice(0, -1)
    return (
        /[?!'"*&^%$#@:;]/g.test(phrase.split(' ').slice(-1))
            ? phrase.slice(0, -2)
            : phrase
    )
}