import React from "react";
import {Container} from "react-bootstrap";
import {LoggedRoutes} from "../routes/LoggedInRoutes/LoggedRoutes";
import {NonLoggedRoutes} from "../routes/NotLoggedRoutes/NonLoggedRoutes";
import LoggedInComponents from "./LoggedInComponents";
import NonLoggedInComponent from "./NonLoggedInComponent";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../reducers/authReducers/logIn";

const MainScreen = () => {
    const storedStates = useSelector( ({logIn}) => {
        return {logIn}
    })
    const dispatch = useDispatch()
    let storedUser = JSON.parse(sessionStorage.getItem("loggedIn"))
    console.log(storedUser)
    let routes, componentToRender;
    if (storedUser){
        if (!storedStates.logIn){
            dispatch({type: "LOGGED_IN", payload: storedUser})
        }
        routes = LoggedRoutes()
        componentToRender = <LoggedInComponents routes = {routes}/>
    }else {
        routes = NonLoggedRoutes()
        componentToRender = <NonLoggedInComponent routes={routes}/>;
    }
    if (storedStates.logIn)console.log(storedStates.logIn)
    return(
        <React.Fragment>
            <BrowserRouter>
                {componentToRender}
            </BrowserRouter>
        </React.Fragment>
    );
}

export default MainScreen;