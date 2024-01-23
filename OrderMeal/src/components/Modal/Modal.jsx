import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import { useContext, useEffect, useRef } from "react";
import ModalContext from "../../store/ModalContext";

const Modal = ({open, children, onClose}) =>{
    const dialog = useRef();
    
    useEffect(()=>{
        const modal = dialog.current;

        if(open){
            modal.showModal();
        }

        return () => modal.close();
    },[open]);

    return (
        ReactDOM.createPortal(
        <dialog ref={dialog} className="modal" onClose={onClose}>
            {children}
        </dialog>,
        document.querySelector("#modal"))       
    )
};

export default Modal;