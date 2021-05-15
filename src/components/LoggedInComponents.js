import React from "react";
import {Switch} from "react-router-dom";
import NavComp from "./navComp/NavComp";

const LoggedInComponents = (props) => {


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