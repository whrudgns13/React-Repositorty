import Modal from "./Modal/Modal"

const Success = ({open, closeSuccess}) =>{
    return (
        <Modal open={open} >
            <h2>Success</h2>
            <p>오더 성공</p>
            <div className="modal-actions">
                <button className="button" onClick={()=>closeSuccess(false)}>Okay</button>
            </div>
        </Modal>
    )
}

export default Success;