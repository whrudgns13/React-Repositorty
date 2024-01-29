import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authAction } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  
  const auth = useSelector( state => state.auth);
  
  const onLogout = () => {
    dispatch(authAction.logout());
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <nav>
          {auth.isAuthentication && (
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={onLogout}>Logout</button>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
