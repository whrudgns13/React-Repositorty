const MealsItem = ({meal, onClick}) =>{
    return (
        <div className="meal-item">            
            <article>
                <img src={`../../backend/public/${meal.image}`} />
                <h3>{meal.name}</h3>
                <div>
                    <span className="meal-item-price">
                        {meal.price}
                    </span>
                </div>
                <div className="meal-item-description">{meal.description}</div>
                <div className="meal-item-actions">
                    <button className="button" onClick={()=>onClick(meal)}>Add Cart</button>
                </div>
            </article>
        </div>
    )
};

export default MealsItem;