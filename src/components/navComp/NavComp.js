import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const NavComp = () => {
    return(
        <Navbar bg={"light"} variant={"light"} style={{margin: '10px'}}>
            <LinkContainer to={"/home"}>
                <Navbar.Brand>
                    PostBook
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse className={"justify-content-end"}>
                <LinkContainer to={"/current_user"}>
                    <Nav.Link>MyProfile</Nav.Link>
                </LinkContainer>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComp;
