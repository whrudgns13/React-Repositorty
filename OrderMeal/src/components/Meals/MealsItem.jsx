import { currencyFormatting } from "../../util/formatting";

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
                    <button className="button" onClick={()=>addCart(meal,"+")}>Add Cart</button>
                </div>
            </article>
        </li>
    )
};

export default MealsItem;