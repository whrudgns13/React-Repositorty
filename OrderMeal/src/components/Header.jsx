import logo from "../assets/logo.jpg";

const Header = ({cartLength}) => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}></img>
                <h1>REACTFOOD</h1>
            </div>
            <button className="text-button">Cart({cartLength})</button>
        </header>
    )
};

export default Header;