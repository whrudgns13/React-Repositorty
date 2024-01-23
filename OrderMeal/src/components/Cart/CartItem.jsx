import { useContext } from "react";
import CartContext from "../../store/CartContext";

const CartItem = ({meal}) => {
    const {addItem,removeItem} = useContext(CartContext);

    return (
        <li className="cart-item">
            <p>{meal.name} - {meal.count} x ${meal.price}</p>
            <div className="cart-item-actions">
                <button onClick={()=>{addItem(meal)}}>+</button>
                <span>{meal.count}</span>
                <button onClick={()=>{removeItem(meal)}}>-</button>
            </div>
        </li>
    );  
}

export default CartItem;