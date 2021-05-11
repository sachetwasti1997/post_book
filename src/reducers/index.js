import {combineReducers} from "redux";
import {signUp} from "./authReducers/signUp";
import {errorReducer} from "./error/errorReducer";
import {selectModalReducer} from "./modalReducers/selectModalReducer";
import {isLoading} from "./extras/isLoading";
import {logIn} from "./authReducers/logIn";
import {isLoginLoading} from "./extras/isLoginLoading";

export default combineReducers({
    signUp,
    error: errorReducer,
    selectModalReducer,
    logIn,
    isLoading,
    isLoginLoading
})