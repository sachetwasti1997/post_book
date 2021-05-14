import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {userDetails} from "../actions/userDetails";
import {isUserDetails} from "../actions/isUserDetails";

const UserPage = () => {

    const storedStates = useSelector(({userDetails, logIn, isUserDetailsFetched}) => {
        return {userDetails, logIn, isUserDetailsFetched}
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (!storedStates.isUserDetailsFetched){
            const token = storedStates.logIn["jsonWebToken"]
            console.log(token)
            dispatch(userDetails(token))
            dispatch(isUserDetails())
        }
    })

    return( <React.Fragment>
                <h1>
                    UserPage
                </h1>
            </React.Fragment>
    )
}

export default UserPage;