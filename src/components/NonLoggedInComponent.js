import React from "react";
import {Switch} from "react-router-dom";
import NavNonLogged from "./navComp/NavNonLogged";
import {Container} from "react-bootstrap";

const NonLoggedInComponent = ({routes}) => {
    return (
        <React.Fragment>
            <NavNonLogged/>
            <div style={{marginLeft: '30px', marginRight: '30px'}}>
                <Switch>
                    {routes}
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default NonLoggedInComponent;
