import { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../Modal/Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatting } from "../../util/formatting";
import Button from "../UI/Button";

const Cart = ({open, closeCart, openCheckoutModal}) =>{
    const {items, totalAmount} = useContext(CartContext);

    const openCheckout = ()=>{
        closeCart(false);
        openCheckoutModal(true);
    }

    return (
        <Modal open={open}>
            <div className="cart">
                <h2>Your Cart</h2>
                <ul>
                    {items.map(meal=>{
                        return <CartItem key={meal.id} meal={meal}/>
                    })}
                </ul>
                <p className="cart-total">{currencyFormatting.format(totalAmount)}</p>
                <div className="modal-actions">
                    <Button textOnly={true} onClick={()=>closeCart(false)}>Close</Button>
                    <Button onClick={openCheckout}>Go to Checkout</Button>
                </div>                
            </div>
        </Modal>       
    );
}

export default Cart;