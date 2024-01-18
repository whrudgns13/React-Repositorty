import Modal from "./Modal/Modal"
import Button from "./UI/Button";

const Success = ({open, closeSuccess}) =>{
    return (
        <Modal open={open} >
            <h2>Success</h2>
            <p>오더 성공</p>
            <div className="modal-actions">
                <Button onClick={()=>closeSuccess(false)}>Okay</Button>
            </div>
        </Modal>
    )
}

export default Success;