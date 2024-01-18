import { useEffect, useState } from "react";
import MealsItem from "./MealsItem";

const Meals = ({addCart}) =>{
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
            
            setMeals(meals);
        })()
    },[]);

    return (
        <ui id="meals">
            {meals.map(( meal => <MealsItem key={meal.id} meal={meal} addCart={addCart}/> ))}
        </ui>
    )
};

export default Meals;