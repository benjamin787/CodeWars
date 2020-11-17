function generateHashtag(words) {
    return (
        words.split(' ').join('').length > 139 || words.trim().length < 1
            ? false
            : (
                '#'.concat('', words.split(' ').map(word => {
                    return word.charAt(0).toUpperCase().concat('', word.slice(1))
                }).join(''))
            )
    )
}