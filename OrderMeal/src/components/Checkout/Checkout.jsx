import Modal from "../Modal/Modal";
import FormInput from "./FormInput";

const Checkout = ({open, totalAmount, closeCheckout, onCheckout}) =>{
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
                    <button type="button" className="text-button" onClick={()=>closeCheckout(false)}>Close</button>
                    <button type="submit" className="button" onClick={()=>closeCheckout(false)}>Go to Checkout</button>
                </div>  
            </form>
        </Modal>
    );
}

export default Checkout;