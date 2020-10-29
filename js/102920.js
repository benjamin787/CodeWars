function list(names) {
    let formatName = ''
    if (names.length > 1) {
        formatName = `${names[names.length-2].name} & ${names[names.length-1].name}`
    } else if (names.length === 1) {
        formatName = `${names[0].name}`
    }
    let answer = names.slice(0, names.length - 2).map(person => {
        return `${person.name}, `
    })
    return answer.concat(formatName).join('')
}

// function list(names) {
//     let arrayNames = names.map(n => n.name)
//     let last = arrayNames.pop()
//     return arrayNames.length ? arrayNames.join(', ') + ' & ' + x : x || ''
// }