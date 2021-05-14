import React, {useEffect} from "react";
import {Switch} from "react-router-dom";
import NavComp from "./navComp/NavComp";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {userDetails} from "../actions/userDetails";
import {isUserDetails} from "../actions/isUserDetails";

const LoggedInComponents = (props) => {

    const storedStates = useSelector(({userDetails, isUserDetailsFetched}) => {
        return {userDetails, isUserDetailsFetched}
    })

    const dispatch = useDispatch()



    return(
        <React.Fragment>
            <NavComp/>
            <div style={{marginLeft:'30px', marginRight: '30px'}}>
                <Switch>
                    {props.routes}
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default LoggedInComponents;