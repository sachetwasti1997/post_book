import UserSignUpComponent from "./components/AuthComponents/UserSignUpComponent";
import Modal from "./components/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {selectModalAction} from "./actions/selectModalAction";
import Login from "./components/AuthComponents/Login";
import MainScreen from "./components/MainScreen";

const App = () => {

  const storedState = useSelector(({signUp, error, selectModalReducer, logIn}) => {
    return {signUp, error, selectModalReducer, logIn}
  })

  const dispatch = useDispatch()

  const close = () => {
    dispatch(selectModalAction(null))
  }
  return (
      <div>
        {/*<UserSignUpComponent/>*/}
        {/*<Login/>*/}
          <MainScreen/>
        <Modal
            closeModal={close}
        />
      </div>
  );
}

export default App

