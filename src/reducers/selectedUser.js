export const selectedUser = (user = null, action) => {
    switch (action.type) {
        case "SELECTED_USER":
            return action.payload
        default:
            return user
    }
}