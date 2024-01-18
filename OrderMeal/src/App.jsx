import ReactDOM from "react-dom";

import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Error from "./components/Error";
import Success from "./components/Success";

function App() {
  const [userCart, setUserCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [error, setError] = useState('');

  const addCart = ((meal, identify)=>{
    setUserCart(carts=>{
      const idx = carts.findIndex(cart=>cart.id===meal.id);
      
      if(idx===-1){
        meal.count = 1;

        return [...carts,meal];
      }

      if(identify==="+"){
        carts[idx].count++;
      }else{
        carts[idx].count--;
      
        if(!carts[idx].count) carts.splice(idx,1);
      }

      return [...carts];
    });    
  });

  useEffect(()=>{
    const totalAmount = userCart.reduce((acc,cur)=>{
      return acc+(cur.price*cur.count);
    },0);

    setTotalAmount(totalAmount);

  },[userCart]);
  

  const handlerCartModal = (isOpen) =>{
    setIsCartOpen(isOpen);
  };

  const handlerCheckoutModal = (isOpen) =>{
    setIsCheckoutOpen(isOpen);
  };

  const onCheckout = async (formData) => {
    try{
      const response = await fetch("http://localhost:3000/orders",{
        method : "POST",
        body : JSON.stringify({
          order : {
            items : userCart,
            customer : formData
          }
        }),
        headers : {
          'Content-Type' : "application/json"
        }
      });
  
      const data = await response.json();
      
      if(!response.ok){
        setError(data.message);        
        return;
      }
      
      setIsSuccessOpen(true);
      setUserCart([]);
    }catch(error){
      setError(error.message);
    }
    
  }
  const handlerSuccess = (isOpen) =>{
    setIsSuccessOpen(isOpen);
  }

  const handlerError = (isOpen) =>{
    setError(isOpen);
  }

  return (
    <>
      <Error error={error} closeError={handlerError} onClose={setIsCheckoutOpen}/>
      <Success open={isSuccessOpen} closeSuccess={handlerSuccess}/>
      <Cart 
        meals={userCart} 
        open={isCartOpen} 
        totalAmount={totalAmount}
        closeCart={handlerCartModal} 
        handlerCart={addCart} 
        openCheckoutModal={handlerCheckoutModal}
      />
      <Checkout 
        open={isCheckoutOpen}
        totalAmount={totalAmount}
        closeCheckout={handlerCheckoutModal}
        onCheckout={onCheckout}
      />
      <Header cartLength={userCart.length} openCart={handlerCartModal}/>
      <main>
        <Meals addCart={addCart}/>
      </main>      
    </>
  );
}

export default App;
