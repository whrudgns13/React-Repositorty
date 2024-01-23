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

  const setModalProgress = (modal) => {
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
