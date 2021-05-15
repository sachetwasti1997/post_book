import React from "react";
import {Card} from "react-bootstrap";
import profile_pic from '../assets/profile_pic.png';

const ProfileCard = ({userName, displayName, image}) => {

    let imageSrc = profile_pic;

    if (image){
        imageSrc = `/images/profile/${image}`
    }

    return(
        <>
            <Card style={{width:'50%', margin: 'auto', boxShadow:'3px 3px 4px 4px grey'}}>
                <Card.Body>
                    <Card.Img variant={"top"} src={imageSrc} style={{backgroundColor: 'light-blue'}}/>
                </Card.Body>
                <Card.Body>
                    <Card.Title>
                        <h1>{userName}</h1>
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfileCard