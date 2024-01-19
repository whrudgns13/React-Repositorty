import { useContext } from "react";
import ModalContext from "../store/ModalContext";
import Modal from "./Modal/Modal"
import Button from "./UI/Button";

const Error = () =>{
    // const {error, setError, setCheckoutOpen} = useContext(ModalContext);
    const {modalProgress, setModalProgress} = useContext(ModalContext);

    const handlerClose = () =>{
        // setError(false);
        // setCheckoutOpen(true);
        setModalProgress('empty');
        setModalProgress('checkout');
    };

    return (
        <Modal open={(typeof modalProgress === 'object') && modalProgress.value==='error'} >
            <h2>Error</h2>
            <p>{modalProgress.message}</p>
            <div className="modal-actions">
                <Button onClick={handlerClose}>Okay</Button>
            </div>
        </Modal>
    )
}

export default Error;