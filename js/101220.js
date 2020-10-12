function likes(names) {

    let subject;

    if (names.length === 0) {
        subject = 'no one likes this'
    } else if (names.length === 1) {
        subject = `${names[0]} likes this`
    } else if (names.length === 2) {
        subject = `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        subject = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        let remaining = names.length - 2
        subject = `${names[0]}, ${names[1]} and ${remaining} others like this`
    }

    return subject
}