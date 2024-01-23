import { useContext } from "react";
import ModalContext from "../store/ModalContext";
import Modal from "./Modal/Modal"
import Button from "./UI/Button";

const Error = ({title, message}) =>{
    // const {error, setError, setCheckoutOpen} = useContext(ModalContext);
    // const {modalProgress, setModalProgress} = useContext(ModalContext);

    // const handlerClose = () =>{
    //     setModalProgress('checkout');
    // };

    return (
        <div className="erorr">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Error;