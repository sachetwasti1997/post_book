import React from "react";
import {Redirect, Route} from "react-router-dom"
import HomePage from "../../components/HomePage";
import UserPage from "../../components/UserPage";

export const LoggedRoutes = () => {
    return (
        <React.Fragment>
            <Route path={"/home"} component={HomePage}/>
            <Route path={"/current_user"} component={UserPage}/>
            <Redirect to={"/home"}/>
        </React.Fragment>
    )
}