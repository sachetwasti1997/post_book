import React from "react";
import './css/modal.css'
import {errorModal} from "../../config/modalNames";
import {useSelector} from "react-redux";
const ErrorModal = React.lazy(() => import("./ErrorModal"))

const Modal = (props) => {

    const storedState = useSelector(({selectModalReducer, error}) => {
        return {selectModalReducer, error}
    })

    const styles = props.styles
    const closeModal = props.closeModal

    const close = (e) => {
        e.stopPropagation()
        closeModal()
    }

    const modalMap = new Map()

    modalMap.set(
        errorModal,
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <ErrorModal message={storedState.error}/>
        </React.Suspense>
    )

    const modalToRender = modalMap.get(storedState.selectModalReducer)

    return(
        <div
            id="myModal"
            className="modal"
            style={storedState.selectModalReducer !== null? { display: "block" } : { display: "none" }}
            // style={{display: "block"}}
        >
            <div className="modal-content" style={styles ? styles : {}}>
                {modalToRender}
                <span className="close" onClick={(e) => close(e)}>
            &times;
          </span>
            </div>
        </div>
    );
}

export default Modal
