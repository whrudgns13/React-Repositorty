import { useContext } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import FormInput from "./FormInput";
import CartContext from "../../store/CartContext";
import ModalContext from "../../store/ModalContext";

const Checkout = () =>{
    const {totalAmount, items, removeItem} = useContext(CartContext);
    const {modalProgress, setModalProgress} = useContext(ModalContext);

    const onCheckout = async (formData) => {
        setModalProgress('empty');
        
        try{
          const response = await fetch("http://localhost:3000/orders",{
            method : "POST",
            body : JSON.stringify({
              order : {
                items,
                customer : formData
              }
            }),
            headers : {
              'Content-Type' : "application/json"
            }
          });
      
          const data = await response.json();
          
          if(!response.ok){
            setModalProgress({
                value : 'error',
                message : data.message
            });        
            return;
          }
          
          setModalProgress('success');
          removeItem([]);
        }catch(error){
            setModalProgress({
                value : 'error',
                message : error.message
            });  
        }
        
      }

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const enterData = Object.fromEntries(formData.entries());
        
        onCheckout(enterData);
    };

   
    return (
        <Modal open={modalProgress==='checkout'}>
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
                    <Button type="button" textOnly={true} onClick={()=>setModalProgress('')}>Close</Button>
                    <Button type="submit">Go to Checkout</Button>
                </div>  
            </form>
        </Modal>
    );
}

export default Checkout;