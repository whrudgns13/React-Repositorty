import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Error from "./components/Error";
import Success from "./components/Success";
import { CartContextProvider } from "./store/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [error, setError] = useState('');

  const handlerCartModal = (isOpen) =>{
    setIsCartOpen(isOpen);
  };

  const handlerCheckoutModal = (isOpen) =>{
    setIsCheckoutOpen(isOpen);
  };

  const handlerSuccess = (isOpen) =>{
    setIsSuccessOpen(isOpen);
  }

  const handlerError = (isOpen) =>{
    setError(isOpen);
  }

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
 

  return (
    <CartContextProvider>
      <Error error={error} closeError={handlerError} onClose={setIsCheckoutOpen}/>
      <Success open={isSuccessOpen} closeSuccess={handlerSuccess}/>
      <Cart 
        open={isCartOpen} 
        closeCart={handlerCartModal}
        openCheckoutModal={handlerCheckoutModal}
      />
      <Checkout 
        open={isCheckoutOpen}
        closeCheckout={handlerCheckoutModal}
        onCheckout={onCheckout}
      />
      <Header openCart={handlerCartModal}/>
      <main>
        <Meals/>
      </main>      
    </CartContextProvider>
  );
}

export default App;
