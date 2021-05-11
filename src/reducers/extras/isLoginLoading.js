export const isLoginLoading = (isLoading = false, action) => {
    switch (action.type) {
        case "LOADING_LOGIN_SPINNER":
            return action.payload
        default:
            return isLoading
    }
}