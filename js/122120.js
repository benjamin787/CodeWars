Array.prototype.sameStructureAs = function(other) {
    const check = param => {
        if (isArray(this) === isArray(param)
            && this.length === param.length) {
                return true
            } else false
    }
    for (let i = 0; i < other.length; i++) {
        check(other[i])
    }

    if (isArray(this) && isArray(other)) {
        if (this.length === other.length) {
            for (let i = 0; i < other.length; i++) {
                if (isArray(this[i]) === isArray(other[i])) {

                }
            }

        } else {
            return false
        }


    } else {
        return false
    }
}