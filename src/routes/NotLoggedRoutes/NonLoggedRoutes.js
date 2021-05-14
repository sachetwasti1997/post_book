import React from "react";
import {Redirect, Route} from "react-router-dom";
import Login from "../../components/AuthComponents/Login";
import UserSignUpComponent from "../../components/AuthComponents/UserSignUpComponent";
import HomePage from "../../components/HomePage";

export const NonLoggedRoutes = () => {
    return (
        <React.Fragment>
            <Route path={"/home"} component={HomePage}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/signup"} component={UserSignUpComponent}/>
            <Redirect to={"/home"}/>
        </React.Fragment>
    )
}