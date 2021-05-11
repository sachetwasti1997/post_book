import React from "react";

const ErrorModal = ({message}) => {
    const errors = message.split("=>")
    let componentToRender = errors.map(item => {
        return <div>{item}</div>
    })
    return(
        componentToRender
    )
}

export default ErrorModal