import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/welcome">Welcome</a> */}
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MainHeader;
