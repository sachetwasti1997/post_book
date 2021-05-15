import Axios from "axios";
import {isLoading} from "../isLoading";
import {errorModal} from "../../config/modalNames";
import {isLogInLoading} from "../isLogInLoading";

export const login = (userCredentials) => async(dispatch) => {

    dispatch(isLogInLoading(true))
    await Axios.post(`/auth/api/1.0/login`, userCredentials)
        .then(res => {
            dispatch(isLogInLoading(false))
            dispatch({type:'LOGGED_IN', payload:res.data})
        })
        .catch(err => {
            dispatch({type: 'ERROR', payload: err.toString()})
            dispatch({type: 'MODAL_SELECT', payload: errorModal})
            dispatch(isLogInLoading(false))
            dispatch(isLoading(false))
        })

}