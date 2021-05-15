import React from "react";
import {LoggedRoutes} from "../routes/LoggedInRoutes/LoggedRoutes";
import {NonLoggedRoutes} from "../routes/NotLoggedRoutes/NonLoggedRoutes";
import LoggedInComponents from "./LoggedInComponents";
import NonLoggedInComponent from "./NonLoggedInComponent";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const MainScreen = () => {
    const storedStates = useSelector( ({logIn}) => {
        return {logIn}
    })
    const dispatch = useDispatch()
    let storedUser = JSON.parse(sessionStorage.getItem("loggedIn"))
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
    return(
        <React.Fragment>
            <BrowserRouter>
                {componentToRender}
            </BrowserRouter>
        </React.Fragment>
    );
}

export default MainScreen;