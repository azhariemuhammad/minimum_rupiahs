let patt = /['Rp']/i;
let patt2 = /[0-9]/


export default function validate(values) {
    let errors = {}
    if (checkCommaAndWhiteSpace(values)) {
        errors.msg = 'Invalid Separator'
        errors.status = true
    } else if (wrongPosition(values)) {
        errors.msg = 'Valid character in wrong position'
        errors.status = true
    } else if (missingValue(values)) {
        errors.msg = 'Missing Value'
        errors.status = true
    } else {
        errors.status = false
    }
    return errors
}

function checkCurrencyCode(value) {
    let regex = RegExp('Rp', 'i')
    return regex.test(value)
}

function checkCommaAndWhiteSpace(value) {
    let regex = RegExp('[, ]')
    if (!checkCurrencyCode(value)) {
        return regex.test(value)
    }
}

function wrongPosition(value) {
    if (patt.test(value)) {
        if (value.search(patt2) === 0 && value.search(patt) !== 0) {
            return true
        }
    }
    return false
}

function missingValue(value) {
    return (patt.test(value) && !patt2.test(value))
}
