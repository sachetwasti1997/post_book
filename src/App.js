import UserSignUpComponent from "./components/AuthComponents/UserSignUpComponent";
import Modal from "./components/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {selectModalAction} from "./actions/selectModalAction";
import Login from "./components/AuthComponents/Login";

const App = () => {

  const storedState = useSelector(({signUp, error, selectModalReducer, logIn}) => {
    return {signUp, error, selectModalReducer, logIn}
  })

  const dispatch = useDispatch()

  const close = () => {
    dispatch(selectModalAction(null))
  }
  return (
      <div className="App">
        <UserSignUpComponent/>
        <Login/>
        <Modal
            closeModal={close}
        />
      </div>
  );
}

export default App

