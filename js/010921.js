function alphanumeric(text) {
    let regex = /([^a-zA-Z0-9]|\s)/
    return !regex.test(text) && text.length > 0
}

//ooOOOooOoOOo so much prettier
const alphanumeric = text => /^[a-z0-9]+$/i.test(text)