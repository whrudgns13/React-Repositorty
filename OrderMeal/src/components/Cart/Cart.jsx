import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Modal from "../Modal/Modal";

const Cart = ({meals}) =>{
    return (
        <Modal>
            <div className="cart">
                <h2>Your Cart</h2>
                {meals.map(meal=>{
                    return <CartItem key={meal.id} meal={meal}/>
                })}
                <span className="cart-total">
                        11
                </span>
                <div className="modal-actions">
                    <button className="text-button">Close</button>
                    <button className="button">Go to Checkout</button>
                </div>                
            </div>
        </Modal>       
    );
}

export default Cart;