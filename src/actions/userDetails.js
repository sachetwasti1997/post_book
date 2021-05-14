import Axios from "axios";
import {errorModal} from "../config/modalNames";

export const userDetails = (token) => async(dispatch) => {

    await Axios.get(`/user/api/1.0/token`,{
        headers: {Authorization: `Bearer ${token}`}
    })
        .then(res => {
            dispatch({type:'USER_DETAILS', payload:res.data})
        })
        .catch(err => {
            dispatch({type: 'ERROR', payload: err.toString()})
            dispatch({type: 'MODAL_SELECT', payload: errorModal})
        })

}