export const signUp = (user = null, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            sessionStorage.removeItem("loggedIn")
            sessionStorage.setItem("loggedIn", JSON.stringify(action.payload))
            return action.payload
        default:
            return user
    }
}