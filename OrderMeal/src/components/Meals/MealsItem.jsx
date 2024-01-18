import { useContext } from "react";
import { currencyFormatting } from "../../util/formatting";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext";

const MealsItem = ({meal}) =>{
    const cartContext = useContext(CartContext);

    const addMealToCart = () =>{
        cartContext.addItem(meal);
    };
    
    return (
        <li className="meal-item">            
            <article>
                <img src={`../../backend/public/${meal.image}`} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">
                        {currencyFormatting.format(meal.price)}
                    </p>
                </div>
                <p className="meal-item-description">{meal.description}</p>
                <div className="meal-item-actions">
                    <Button onClick={addMealToCart} >Add Cart</Button>
                </div>
            </article>
        </li>
    )
};

export default MealsItem;