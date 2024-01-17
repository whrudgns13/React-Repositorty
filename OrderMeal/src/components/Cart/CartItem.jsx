const CartItem = ({meal}) =>{
    return (
        <div className="cart-item">
            <p>{meal.name}</p>
            <div className="cart-item-actions">
                <button>+</button>
                1
                <button>-</button>
            </div>
        </div>
    );  
}

export default CartItem;