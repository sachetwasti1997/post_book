import React, {useState} from "react";
import {Button, Card, Container, Form, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {errorModal} from "../../config/modalNames";
import {selectModalAction} from "../../actions/selectModalAction";
import {errorAction} from "../../actions/Error/errorAction";
import {signup} from "../../actions/AuthActions/signup";

const UserSignUpComponent = () => {

    const [displayName, setDisplayName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRetype, setPasswordRetype] = useState("");

    const storedState = useSelector(({isLoading}) => {
        return {isLoading}
    })

    const dispatch = useDispatch()

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordReTypeChange = (e) => {
        setPasswordRetype(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const isFormFilled = () => {
        if (email === "" || password === "" || passwordRetype === "" || userName === "" || displayName === ""){
            return false
        }
        return true
    }

    const signUp = () => {
        console.log("Signu")
        if (passwordRetype !== password){
            console.log("Passwords are not equal")
            dispatch(errorAction('Please Enter correct credentials'))
            dispatch(selectModalAction(errorModal))
        }else {
            const user = {
                userName,
                displayName,
                email,
                password
            }
            dispatch(signup(user))
        }
    }

    return(
        <Card
            bg={"primary"}
            style={{
                marginTop: '8%',
                width: '60%',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '30px',
                boxShadow: '5px 5px 5px 5px grey'
            }}
        >
        <Container>
            <h1>Sign Up</h1>
            <div style={{textAlign: 'left'}}>
                <Form.Group>
                    <Form.Label>Display Name:</Form.Label>
                    <Form.Control type={"Text"} placeholder={"Enter Your Display Name"} onChange={handleDisplayNameChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type={"email"} placeholer={"Enter Your Email Address"} onChange={handleEmailChange}/>
                    <Form.Text className={"text-muted"}>We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>UserName:</Form.Label>
                    <Form.Control type={"text"} placeholder={"Enter Your UserName"} onChange={handleUserNameChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type={"password"} placeholder={"Enter your password"} onChange={handlePasswordChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Re-Type Password:</Form.Label>
                    <Form.Control type={"password"} placeholder={"Please type your Password again"} onChange={handlePasswordReTypeChange}/>
                </Form.Group>
            </div>
            <Button variant={isFormFilled() === true?"primary":"secondary"} onClick={isFormFilled() === true?signUp:null} disabled={storedState.isLoading}>
                {storedState.isLoading &&
                    <Spinner animation="border" role="status" size={"sm"}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }
                Sign Up
            </Button>
        </Container>
        </Card>
    );

}

export default UserSignUpComponent;