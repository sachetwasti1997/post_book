export const userDetails = (user = null, action) => {
    switch (action.type) {
        case "USER_DETAILS":
            return action.payload
        default:
            return null
    }
}