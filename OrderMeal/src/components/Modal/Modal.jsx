import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import { useEffect, useRef } from "react";

const Modal = ({open, children, onClose}) =>{
    const dialog = useRef();

    useEffect(()=>{
        if(open){
            dialog.current.showModal();
        }else{
            dialog.current.close();
        }
    },[open]);

    return (
        ReactDOM.createPortal(
            <dialog ref={dialog} className="modal">
            {children}
            {/* <Cart/> */}
        </dialog>,
        document.querySelector("#modal"))       
    )
};

export default Modal;