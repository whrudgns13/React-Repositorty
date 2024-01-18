import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Modal from "../Modal/Modal";

const Cart = ({meals, totalAmount, open, closeCart, handlerCart, openCheckoutModal}) =>{

    const openCheckout = ()=>{
        closeCart(false);
        openCheckoutModal(true);
    }

    return (
        <Modal open={open}>
            <div className="cart">
                <h2>Your Cart</h2>
                {meals.map(meal=>{
                    return <CartItem key={meal.id} meal={meal} handlerCart={handlerCart}/>
                })}
                <span className="cart-total">
                    ${totalAmount}
                </span>
                <div className="modal-actions">
                    <button className="text-button" onClick={()=>closeCart(false)}>Close</button>
                    <button className="button" onClick={openCheckout}>Go to Checkout</button>
                </div>                
            </div>
        </Modal>       
    );
}

export default Cart;