import Modal from "../components/Modal"
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {

  const [isShowing, setIsShowing] = useState(false);
  const [accept, setAccept] = useState(false);

  const handleOnClick = () => {
    setIsShowing(!isShowing)
  } 
  
  const handleAccept = () => {
    setAccept(!accept);
    setIsShowing(!isShowing)
  }

  const backgroundColor = accept ? "bg-blue-300" : "bg-white";

  const actionBar = <Button primary onClick={handleAccept} className="max-w-[30%] min-w-[30%]">I Accept</Button>

  const center = 'absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]';

  const modal = <Modal onClick={handleOnClick} actionBar={actionBar}>

    <p className={`text-center p-[10px] ${center}`}>
      Here is an important agreement for you to accept.
    </p>

  </Modal>;

  return (

    <div className={`h-[100vh] ${backgroundColor}`} >
      <Button primary className={`max-w-[20%] min-w-[20%] ${center}`} onClick={handleOnClick}>Open Modal</Button>
      {isShowing && modal}
    </div>
  )
}

export default ModalPage;