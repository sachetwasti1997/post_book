import React, {useState} from "react";
import {Button, Container, Form, Spinner} from "react-bootstrap";
import {errorAction} from "../../actions/Error/errorAction";
import {selectModalAction} from "../../actions/selectModalAction";
import {errorModal} from "../../config/modalNames";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/AuthActions/login";

const Login = () => {

    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);

    const storedState = useSelector(({isLoginLoading}) => {
        return {isLoginLoading}
    })

    const dispatch = useDispatch()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const loginClick = () => {
            const userCredentials = {
                "userName":email,
                password
            }
        console.log(userCredentials)
            dispatch(login(userCredentials))
    }

    const isFormFilled = () => {
        if (email === null || password === null){
            return false
        }
        return true
    }

    return(
        <Container>
            <h1>Log In</h1>
            <div style={{textAlign: 'left'}}>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type={"email"} placeholer={"Enter Your Email Address"} onChange={handleEmailChange}/>
                    <Form.Text className={"text-muted"}>Please enter the email used while creating the account.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Re-Type Password:</Form.Label>
                    <Form.Control type={"password"} placeholder={"Please type your Password again"} onChange={handlePasswordChange}/>
                </Form.Group>
            </div>
            <Button variant={isFormFilled() === true?"primary":"secondary"} onClick={isFormFilled() === true?loginClick:null} disabled={storedState.isLoading}>
                {storedState.isLoginLoading &&
                <Spinner animation="border" role="status" size={"sm"}>
                    <span className="sr-only">Loading...</span>
                </Spinner>
                }
                Log In
            </Button>
        </Container>
    );
}

export default Login;
