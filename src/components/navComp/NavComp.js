import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const NavComp = () => {
    return(
        <Navbar bg={"primary"} variant={"light"} style={{margin: '10px', boxShadow:'3px 3px 4px 4px grey', borderRadius: '15px'}}>
            <LinkContainer to={"/home"}>
                <Navbar.Brand>
                    <h3><strong>PostBook</strong></h3>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse className={"justify-content-end"}>
                <LinkContainer to={"/current_user"} style={{color: 'black', cursor: 'pointer'}}>
                    <Nav><h4>My Profile</h4></Nav>
                </LinkContainer>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComp;
