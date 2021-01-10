function alphanumeric(text) {
    let regex = /([^a-zA-Z0-9]|\s)/
    return !regex.test(text) && text.length > 0
}