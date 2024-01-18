import { currencyFormatting } from "../../util/formatting";
import Button from "../UI/Button";

const MealsItem = ({meal, addCart}) =>{
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
                    <Button onClick={()=>addCart(meal,"+")} >Add Cart</Button>
                </div>
            </article>
        </li>
    )
};

export default MealsItem;