import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logo__text">
          VM
        </Link>
      </div>
    </div>
  );
};

export default Header;
