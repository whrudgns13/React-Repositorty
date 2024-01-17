import { useEffect, useState } from "react";
import MealsItem from "./MealsItem";

const Meals = ({onClick}) =>{
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const response = await fetch("http://localhost:3000/meals");
            if(!response.ok){
                console.log("fetch error...");
                return;
            }

            const meals = (await response.json()).map(meal=>{
                meal.count = 0;
                return meal;
            });
            console.log(meals);
            setMeals(meals);
        })()
    },[]);

    return (
        <div id="meals">
            {meals.map(( meal => <MealsItem key={meal.id} meal={meal} onClick={onClick}/> ))}
        </div>
    )
};

export default Meals;