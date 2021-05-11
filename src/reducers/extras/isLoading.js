export const isLoading = (isLoading = false, action) => {
    switch (action.type) {
        case "LOADING_SPINNER":
            return action.payload
        default:
            return isLoading
    }
}