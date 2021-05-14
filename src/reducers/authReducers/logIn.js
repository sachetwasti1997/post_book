export const logIn = (loggedIn = null, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            sessionStorage.removeItem("loggedIn")
            sessionStorage.setItem("loggedIn", JSON.stringify(action.payload))
            return action.payload
        default:
            return loggedIn
    }
}