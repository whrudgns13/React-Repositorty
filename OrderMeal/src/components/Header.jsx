import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import ModalContext from "../store/ModalContext";

const Header = () => {
    const {items} = useContext(CartContext);
    const {setModalProgress} = useContext(ModalContext);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}></img>
                <h1>REACTFOOD</h1>
            </div>
            <Button textOnly={true} onClick={()=>setModalProgress('cart')}>
                Cart({items.length})
            </Button>
        </header>
    )
};

export default Header;