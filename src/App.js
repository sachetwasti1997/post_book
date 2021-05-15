import Modal from "./components/modal/Modal";
import {useDispatch} from "react-redux";
import {selectModalAction} from "./actions/selectModalAction";
import MainScreen from "./components/MainScreen";

const App = () => {

  const dispatch = useDispatch()

  const close = () => {
    dispatch(selectModalAction(null))
  }
  return (
      <div>
          <MainScreen/>
        <Modal
            closeModal={close}
        />
      </div>
  );
}

export default App

