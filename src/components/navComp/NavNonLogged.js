import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const NavNonLogged = () => {
    return (
        <Navbar bg={"light"} variant={"light"} style={{margin: '10px'}}>
            <LinkContainer to={"/home"}>
                <Navbar.Brand>
                    Post Book
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse className={"justify-content-end"}>
                <LinkContainer to={"/signup"}>
                    <Nav.Link>SignUp</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/login"}>
                    <Nav.Link>LogIn</Nav.Link>
                </LinkContainer>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavNonLogged;
