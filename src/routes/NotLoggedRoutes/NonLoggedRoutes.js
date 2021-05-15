import React from "react";
import {Redirect, Route} from "react-router-dom";
import Login from "../../components/AuthComponents/Login";
import UserSignUpComponent from "../../components/AuthComponents/UserSignUpComponent";
import HomePage from "../../components/HomePage";
import UserSelected from "../../components/UserSelected";

export const NonLoggedRoutes = () => {
    return (
        <React.Fragment>
            <Redirect to={"/home"}/>
            <Route path={"/home"} component={HomePage}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/signup"} component={UserSignUpComponent}/>
            <Route path={"/user/:id"} component={UserSelected}/>
        </React.Fragment>
    )
}