import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userDetails} from "../actions/userDetails";
import {isUserDetails} from "../actions/isUserDetails";
import ProfileCard from "./ProfileCard";

const UserPage = () => {

    const storedStates = useSelector(({userDetails, logIn, isUserDetailsFetched}) => {
        return {userDetails, logIn, isUserDetailsFetched}
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (!storedStates.isUserDetailsFetched){
            const token = storedStates.logIn["jsonWebToken"]
            dispatch(userDetails(token))
            dispatch(isUserDetails())
        }
    })

    let userName, userDisplayName, image;

    if (storedStates.userDetails){
        userName = storedStates.userDetails.userName
        userDisplayName = storedStates.userDetails.displayName
        image = storedStates.userDetails.image
    }

    return(
        <React.Fragment>
            <React.Fragment>
                <ProfileCard
                    userName={userName ? userName:"No User"}
                    displayName={userDisplayName ? userDisplayName:"No User"}
                    image={image}/>
            </React.Fragment>
        </React.Fragment>
    )
}

export default UserPage;