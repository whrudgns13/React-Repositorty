const CartItem = ({meal, handlerCart}) => {
    return (
        <div className="cart-item">
            <p>{meal.name} - {meal.count} x ${meal.price}</p>
            <div className="cart-item-actions">
                <button onClick={()=>{handlerCart(meal,"+")}}>+</button>
                {meal.count}
                <button onClick={()=>{handlerCart(meal,"-")}}>-</button>
            </div>
        </div>
    );  
}

export default CartItem;