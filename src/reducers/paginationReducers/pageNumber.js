export const pageNumber = (number = 0, action) => {
    switch (action.type) {
        case "PAGE_NUMBER":
            return action.payload
        default:
            return number
    }
}