import { useContext } from "react";
import Modal from "./Modal/Modal"
import Button from "./UI/Button";
import ModalContext from "../store/ModalContext";

const Success = () =>{
    // const {successIsOpen,setSuccessOpen} = useContext(ModalContext);
    const {modalProgress, setModalProgress} = useContext(ModalContext);
    
    return (
        <Modal open={modalProgress==='success'} >
            <h2>Success</h2>
            <p>오더 성공</p>
            <div className="modal-actions">
                <Button onClick={()=>setModalProgress('')}>Okay</Button>
            </div>
        </Modal>
    )
}

export default Success;