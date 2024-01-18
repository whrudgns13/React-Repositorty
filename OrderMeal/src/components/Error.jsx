import Modal from "./Modal/Modal"

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
                <button className="button" onClick={handlerClose}>Okay</button>
            </div>
        </Modal>
    )
}

export default Error;