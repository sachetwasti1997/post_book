export const isUserDetailsFetched = (status = false, action) => {
    switch (action.type) {
        case "USER_DETAILS_FETCHED":
            return action.payload
        default:
            return status
    }
}