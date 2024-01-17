import ReactDOM from "react-dom";

import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [userCart, setUserCart] = useState([]);

  const addCart = (meal=>{
    setUserCart(carts=>{
      const idx = carts.findIndex(cart=>cart.id===meal.id);
      
      if(idx>-1){
        carts[idx].count++;
        return [...carts];
      }
      
      return [...carts,meal];
    });    
  });
  
  return (
    <>
      <Cart meals={userCart}/>
      <Header cartLength={userCart.length}/>
      <main>
        <Meals onClick={addCart}/>
      </main>
      
    </>
  );
}

export default App;
