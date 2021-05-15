import {combineReducers} from "redux";
import {signUp} from "./authReducers/signUp";
import {errorReducer} from "./error/errorReducer";
import {selectModalReducer} from "./modalReducers/selectModalReducer";
import {isLoading} from "./extras/isLoading";
import {logIn} from "./authReducers/logIn";
import {isLoginLoading} from "./extras/isLoginLoading";
import {userDetails} from "./userDetails";
import {isUserDetailsFetched} from "./isUserDetailsFetched";
import {pageNumber} from "./paginationReducers/pageNumber";
import {selectedUser} from "./selectedUser";

export default combineReducers({
    signUp,
    error: errorReducer,
    selectModalReducer,
    logIn,
    isLoading,
    isLoginLoading,
    userDetails,
    isUserDetailsFetched,

    //paginationReducers
    pageNumber,

    //selectedUser
    selectedUser

})