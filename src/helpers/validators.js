export const required = (value) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length <= maxLength) return undefined
    return `Field must include ${maxLength} symbols max`
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length >= minLength) return undefined
    return `Field must include ${minLength} symbols min`
}