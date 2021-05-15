import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const NavNonLogged = () => {
    return (
        <Navbar
            bg={"primary"}
            variant={"light"}
            style={{
                margin: '10px',
                boxShadow:'3px 3px 4px 4px grey',
                borderRadius: '15px'
            }}
        >
            <LinkContainer to={"/home"}>
                <Navbar.Brand>
                    <h3><strong>PostBook</strong></h3>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse className={"justify-content-end"}>
                <LinkContainer to={"/signup"} style={{color: 'black', cursor: 'pointer'}}>
                    <Nav>SignUp</Nav>
                </LinkContainer>&nbsp;&nbsp;&nbsp;
                <LinkContainer to={"/login"} style={{color: 'black', cursor: 'pointer'}}>
                    <Nav>LogIn</Nav>
                </LinkContainer>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavNonLogged;
