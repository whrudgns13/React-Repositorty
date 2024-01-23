import { useContext } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import FormInput from "./FormInput";
import CartContext from "../../store/CartContext";
import ModalContext from "../../store/ModalContext";
import useHttp from "../../hooks/useHttp";
import Error from "../Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const { totalAmount, items, clearCart } = useContext(CartContext);
  const { modalProgress, setModalProgress } = useContext(ModalContext);
  const { data, error, isLoading, sendRequest } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const enterData = Object.fromEntries(formData.entries());

    sendRequest(JSON.stringify({
      order: {
        items,
        customer: enterData,
      },
    }));
  };

  let actions = (
    <>
      <Button
        type="button"
        textOnly={true}
        onClick={() => setModalProgress("")}
      >
        Close
      </Button>
      <Button type="submit">Submit</Button>
    </>
  );

  if (isLoading) actions = <span>Sending Data....</span>;
  
  if(data && !error){
    clearCart();
    return (
        <Modal open={modalProgress==='checkout'} onClose={()=>setModalProgress('empty')}>
            <h2>Success</h2>
            <p>오더 성공</p>
            <div className="modal-actions">
                <Button onClick={()=>setModalProgress('empty')}>Okay</Button>
            </div>
        </Modal>
    );    
  }

  return (
    <Modal open={modalProgress === "checkout"}>
      <form className="control" onSubmit={onSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : ${totalAmount}</p>
        <FormInput label="FullName" id="name" type="text" name="name" />
        <FormInput label="E-Mail Address" id="email" type="text" name="email" />
        <FormInput label="Street" id="street" type="text" name="street" />
        <div className="control-row">
          <FormInput
            label="Postal Code"
            id="postal-code"
            type="text"
            name="postal-code"
          />
          <FormInput label="City" id="city" type="text" name="city" />
        </div>
        {error && <Error title="주문 실패" message={error} />}
        <div className="modal-actions">{actions}</div>
      </form>
    </Modal>
  );
};

export default Checkout;
