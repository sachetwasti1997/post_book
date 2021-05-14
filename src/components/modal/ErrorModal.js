import React from "react";

const ErrorModal = ({message}) => {
    const errors = message.split("=>")
    let i = 0
    let componentToRender = errors.map(item => {
        i = i++
        return <div key={i}>{item}</div>
    })
    return(
        componentToRender
    )
}

export default ErrorModal