import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = ({openCart}) => {
    const {items} = useContext(CartContext);
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}></img>
                <h1>REACTFOOD</h1>
            </div>
            <Button textOnly={true} onClick={openCart}>
                Cart({items.length})
            </Button>
        </header>
    )
};

export default Header;