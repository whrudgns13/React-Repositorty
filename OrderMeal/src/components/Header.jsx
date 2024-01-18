import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = ({cartLength, openCart}) => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}></img>
                <h1>REACTFOOD</h1>
            </div>
            <Button textOnly={true} onClick={openCart}>
                Cart({cartLength})
            </Button>
        </header>
    )
};

export default Header;