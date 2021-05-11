export const selectModalReducer = (modal = null, action) => {
    switch (action.type) {
        case "MODAL_SELECT":
            return action.payload
        default:
            return modal
    }
}