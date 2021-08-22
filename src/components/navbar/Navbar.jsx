import "./Navbar.css";
import { IconContext } from "react-icons";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <p>Menu</p>
      <h1>Ritual</h1>
      <div className="navbar__right">
        <p>Who We Are</p>
        <FaCartArrowDown className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
