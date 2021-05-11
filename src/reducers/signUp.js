export const signUp = (message = null, action) => {
    switch (action.type) {
        case "MESSAGE":
            return action.payload
        default:
            return message
    }
}