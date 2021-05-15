import React from "react";
import {Card, Image, Row} from "react-bootstrap";
import default_image from '../../assets/profile_pic.png';

const UserItem = ({id, displayName, userName, image}) => {
    return(
        <Card
            key={id}
            style={{
                borderRadius: '10px',
                boxShadow: '3px 3px 4px 4px grey',
                marginBottom: `10px`
            }}
        >
                <Card.Body>
                    <Row style={{ color: 'black'}}>
                        <Image src={!image?default_image:`/images/profile/${image}`} style={{marginTop: `auto`, height:'32px', width: '32px'}}/>
                        <span className={"pl-4"} style={{marginTop:`auto`, marginBottom: `auto`}}>{`${displayName}@${userName}`}</span>
                    </Row>
                </Card.Body>
        </Card>
    )
}

export default UserItem;
