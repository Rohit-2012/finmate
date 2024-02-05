import headerStyle from "./Header.module.css";
import { logo } from "../../assets/images";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={headerStyle.logo_container}>
        <Link to=".">
          <img src={logo} alt="FineMate Logo" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
