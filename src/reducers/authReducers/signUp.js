export const signUp = (user = null, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            localStorage.setItem("loggedIn", JSON.stringify(action.payload))
            return action.payload
        default:
            return user
    }
}