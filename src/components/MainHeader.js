import { NavLink } from "react-router-dom";
import Styles from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={Styles.header}>
      <nav>
        <ul>
          <li>
            {/* <a href="/welcome">Welcome</a> */}
            <NavLink activeClassName={Styles.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={Styles.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
