import React, {useEffect, useState} from "react";
import Axios from "axios";
import {API_GET_USERS} from "../../config/urls";
import {useDispatch, useSelector} from "react-redux";
import {errorModal} from "../../config/modalNames";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import UserItem from "./UserItem";
import {setPageNumber} from "../../actions/paginationActions/setPageNumber";
import {selectedUserAction} from "../../actions/selectedUserAction";

const UserList = () => {
    const [number, setNumber] = useState(0)
    const [size, setSize] = useState(3)
    const [content, setContent] = useState([])
    const [next, setNext] = useState(false)
    const [previous, setPrevious] = useState(true);

    const storedState = useSelector(({logIn, pageNumber}) => {
        return {logIn, pageNumber}
    })

    const dispatch = useDispatch()

    const getUsersInitially = ((async () => {
        if (storedState.logIn){
            let token = storedState.logIn['jsonWebToken']
            await Axios.get(API_GET_USERS+`?page=${storedState.pageNumber}&size=${size}`,{
                headers: {Authorization: `Bearer ${token}`}
            })

                .then(res => {
                    setContent(res.data.content)
                    setPrevious(res.data.first)
                    setNext(res.data.last)
                })

                .catch(err => {
                dispatch({type: 'ERROR', payload: 'User Load Failed'})
                dispatch({type: 'MODAL_SELECT', payload: errorModal})
                setContent(["not defined"])
            })
        }else{
            await Axios.get(API_GET_USERS+`?page=${storedState.pageNumber}&size=${size}`)

                .then(res => {
                    console.log(res.data)
                    setContent(res.data.content)
                    setPrevious(res.data.first)
                    setNext(res.data.last)
                })

                .catch(err => {
                    dispatch({type: 'ERROR', payload: 'User Load Failed'})
                    dispatch({type: 'MODAL_SELECT', payload: errorModal})
                    setContent(["not defined"])
                })
        }
        setNumber(storedState.pageNumber)
    }))

    useEffect(() => {
        if (content.length === 0 || number !== storedState.pageNumber){
            getUsersInitially()
        }
    })

    const selectUser = (user) => {
        dispatch(selectedUserAction(user))
    }

    const createUserList = () => {
        return content.map(item => {
            return(
                <Link
                    key={item.id}
                    to={`/user/${item.id}`}
                    onClick = {() => {selectUser(item)}}>
                    <UserItem
                        key={item.id}
                        id={item.id}
                        displayName={item.displayName}
                        userName={item.userName}
                        image={item.image}/>
                </Link>
            )
        })
    }

    const noUsersFoundList = () => {
        return(
            <Card style={{marginBottom:'10px'}}>
                <Card.Body><h1>No Users found</h1></Card.Body>
            </Card>
        );
    }

    const onNextClick = (e) => {
        // setNumber(number + 1)
        dispatch(setPageNumber(storedState.pageNumber+1))
        // getUsersInitially()
    }

    const onPreviousClick = () => {
        // setNumber(number - 1)
        dispatch(setPageNumber(storedState.pageNumber-1))
        // getUsersInitially()
    }

    return(
        <div>
            <Card style={{
                marginBottom:'10px',
                width: 'auto',
                borderRadius: '10px',
                boxShadow: '3px 3px 4px 4px grey'
            }}
            >
                <Card.Body style={{textAlign: 'center', width: `auto`}}>
                    <strong>Users</strong>
                </Card.Body>
            </Card>
            {content.length > 0 ? createUserList(): noUsersFoundList()}
                <Button variant={"primary"} disabled={previous} onClick={onPreviousClick}> {`<`} </Button>{`  `}
                <Button variant={"primary"} disabled={next} onClick={onNextClick}> {`>`} </Button>
        </div>
    )

}

export default UserList;