import { createContext, useState } from "react";

const ModalContext = createContext({
//   cartIsOpen: false,
//   checkoutIsOpen: false,
//   successIsOpen: false,
//   error: "",
//   modal : '',
//   setCartOpen: (isOpen) => {},
//   setCheckoutOpen: (isOpen) => {},
//   setSuccessOpen: (isOpen) => {},
//   setError: (error) => {},
    modalProgress : '',
    setModalProgress : (modal) => {}
});

export default ModalContext;

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState('');

  const modalText = {
    empty : 'empty',
    cart : 'cart',
    checkout : 'checkout',
    success : 'success',
    error : {
        value : 'error',
        message : ''
    }
  };

  const setModalProgress = (modal) => {
    if(!modalText[modal]){
        setModal('error');
    }

    setModal(modal);
  };

  const modalContext = {
    modalProgress : modal,
    setModalProgress
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
};
