import React from "react";
import {useSelector} from "react-redux";
import ProfileCard from "./ProfileCard";

export const UserSelected = () => {

    const state = useSelector(({selectedUser}) => {
        return {selectedUser}
    })

    return(
        <React.Fragment>
            <ProfileCard
                userName={state.selectedUser ? state.selectedUser.userName:"No User"}
                displayName={state.selectedUser ? state.selectedUser.displayName:"No User"}
                image={state.selectedUser ? state.selectedUser.image: "No User"}/>
        </React.Fragment>
    )

}

export default UserSelected;