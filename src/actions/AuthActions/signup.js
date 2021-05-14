import Axios from 'axios';
import {url} from '../../config/initVariables'
import {errorModal} from "../../config/modalNames";
import {isLoading} from "../isLoading";

export const signup = (userCredentials) => async (dispatch) => {

    dispatch(isLoading(true))
    await Axios.post(`/user/api/1.0/signup`, userCredentials)
        .then(res => {
            dispatch({type:'LOGGED_IN', payload: res.data})
            dispatch(isLoading(false))
        })
        .catch(err => {
            if (err.response.data.validationErrors) {
                const errors = Object.values(err.response.data.validationErrors)
                let str = "";
                for (const item of errors) {
                    str += item + '=>'
                }
                dispatch({type: 'ERROR', payload: str})
            }
            else{
                dispatch({type: 'ERROR', payload: err.toString()})
            }
            dispatch({type: 'MODAL_SELECT', payload: errorModal})
            dispatch(isLoading(false))
        })

}