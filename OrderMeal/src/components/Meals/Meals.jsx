import { useEffect, useState } from "react";
import MealsItem from "./MealsItem";
import useHttp from "../../hooks/useHttp";
import Error from "../Error";

const requestConfig = {}

const Meals = ({ addCart }) => {
//   const [meals, setMeals] = useState([]);
  const { 
    data : meals,
    error,
    isLoading
  } = useHttp("http://localhost:3000/meals",requestConfig,[]);
  
  // useEffect(()=>{
  //     (async ()=>{
  //         const response = await fetch("http://localhost:3000/meals");

  //         if(!response.ok){
  //             console.log("fetch error...");
  //             return;
  //         }

  //         const meals = await response.json();

  //         setMeals(meals);
  //     })()
  // },[]);

  if(isLoading) return <p>Loading Menu...</p>

  if(error){
    return <Error title="loading fail Meals..." message={error}/>
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealsItem key={meal.id} meal={meal} addCart={addCart} />
      ))}
    </ul>
  );
};

export default Meals;
