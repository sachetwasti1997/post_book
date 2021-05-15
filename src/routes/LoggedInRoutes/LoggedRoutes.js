import React from "react";
import {Redirect, Route} from "react-router-dom"
import HomePage from "../../components/HomePage";
import UserPage from "../../components/UserPage";
import UserSelected from "../../components/UserSelected";

export const LoggedRoutes = () => {
    return (
        <React.Fragment>
            <Redirect to={"/home"}/>
            <Route path={"/home"} component={HomePage}/>
            <Route path={"/current_user"} component={UserPage}/>
            <Route path={"/user/:id"} component={UserSelected}/>
        </React.Fragment>
    )
}