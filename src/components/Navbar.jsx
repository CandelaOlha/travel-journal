import "../styles/Navbar.css";
import { BiWorld } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <BiWorld className="navbar-icon" />
      <h1 className="app-title">my travel journal.</h1>
    </nav>
  );
};

export default Navbar;
