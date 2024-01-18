import { useContext } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import FormInput from "./FormInput";
import CartContext from "../../store/CartContext";

const Checkout = ({open, closeCheckout, onCheckout}) =>{
    const {totalAmount} = useContext(CartContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const enterData = Object.fromEntries(formData.entries());
        
        onCheckout(enterData);
    };
    return (
        <Modal open={open}>
            <form className="control" onSubmit={onSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount : ${totalAmount}</p>
                <FormInput
                    label="FullName"
                    id="name"
                    type="text"
                    name="name"
                />
                <FormInput
                    label="E-Mail Address"
                    id="email"
                    type="text"
                    name="email"
                />
                <FormInput
                    label="Street"
                    id="street"
                    type="text"
                    name="street"
                />
                <div className="control-row">
                    <FormInput
                        label="Postal Code"
                        id="postal-code"
                        type="text"
                        name="postal-code"
                    />
                    <FormInput
                        label="City"
                        id="city"
                        type="text"
                        name="city"
                    />
                </div>
                <div className="modal-actions">
                    <Button type="button" textOnly={true} onClick={()=>closeCheckout(false)}>Close</Button>
                    <Button type="submit" onClick={()=>closeCheckout(false)}>Go to Checkout</Button>
                </div>  
            </form>
        </Modal>
    );
}

export default Checkout;