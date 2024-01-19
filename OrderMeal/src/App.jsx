import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Error from "./components/Error";
import Success from "./components/Success";
import { CartContextProvider } from "./store/CartContext";
import { ModalContextProvider } from "./store/ModalContext";

function App() {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  // const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  // const [error, setError] = useState('');

  // const handlerCartModal = (isOpen) =>{
  //   setIsCartOpen(isOpen);
  // };

  // const handlerCheckoutModal = (isOpen) =>{
  //   setIsCheckoutOpen(isOpen);
  // };

  // const handlerSuccess = (isOpen) =>{
  //   setIsSuccessOpen(isOpen);
  // }

  // const handlerError = (isOpen) =>{
  //   setError(isOpen);
  // }

  return (
    <CartContextProvider>
      <ModalContextProvider>
        <Error />
        <Success />
        <Cart />
        <Checkout />
        <Header/>
      </ModalContextProvider>      
      <main>
        <Meals/>
      </main>      
    </CartContextProvider>
  );
}

export default App;
