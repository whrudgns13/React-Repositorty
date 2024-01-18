import Modal from "./Modal/Modal"
import Button from "./UI/Button";

const Error = ({error, closeError, onClose}) =>{
    const handlerClose = () =>{
        closeError(false);
        if(onClose){
            onClose(true);
        }
    }
    return (
        <Modal open={!!error} >
            <h2>Error</h2>
            <p>{error}</p>
            <div className="modal-actions">
                <Button onClick={handlerClose}>Okay</Button>
            </div>
        </Modal>
    )
}

export default Error;