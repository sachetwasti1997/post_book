export const errorReducer = (message = "", action) => {
    switch (action.type) {
        case "ERROR":
            return action.payload
        default:
            return message
    }
}