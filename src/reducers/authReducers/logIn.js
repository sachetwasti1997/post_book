export const logIn = (loggedIn = null, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            localStorage.setItem("loggedIn", JSON.stringify(action.payload))
            return action.payload
        default:
            return loggedIn
    }
}