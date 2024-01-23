import { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../Modal/Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatting } from "../../util/formatting";
import Button from "../UI/Button";
import ModalContext from "../../store/ModalContext";

const Cart = () =>{
    const {items, totalAmount} = useContext(CartContext);
    // const {cartIsOpen, setCartOpen, setCheckoutOpen} = useContext(ModalContext);
    const {modalProgress, setModalProgress} = useContext(ModalContext);
    
    const openCheckout = ()=>{
        setModalProgress('checkout');
    }

    const handlerClose = ()=>{
        modalProgress==='cart' ? setModalProgress('') : null
    }
    
    return (
        <Modal open={modalProgress==="cart"} onClose={handlerClose}>
            <div className="cart">
                <h2>Your Cart</h2>
                <ul>
                    {items.map(meal=>{
                        return <CartItem key={meal.id} meal={meal}/>
                    })}
                </ul>
                <p className="cart-total">{currencyFormatting.format(totalAmount)}</p>
                <div className="modal-actions">
                    <Button textOnly={true} onClick={()=>setModalProgress('empty')}>Close</Button>
                    {!!items.length && <Button onClick={openCheckout}>Go to Checkout</Button>}
                </div>                
            </div>
        </Modal>       
    );
}

export default Cart;