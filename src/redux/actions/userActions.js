export const updateFirstName = (name) => {
    return ({
        type: 'UPDATE_NAME',
        value: name
    })
}


export const updateLastName = (age) => {
    return ({
        type: "UPDATE_AGE",
        value: age
    })
}