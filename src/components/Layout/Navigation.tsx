import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const path = useLocation().pathname;

  return (
    <nav className="nav">
      <div className="nav__links">
        <Link
          to="/about"
          className={
            "nav__link" + (path === "/about" ? " nav__link--active" : "")
          }
        >
          About
        </Link>
        <Link
          to="/skills"
          className={
            "nav__link" + (path === "/skills" ? " nav__link--active" : "")
          }
        >
          Skills and Experience
        </Link>
        <Link
          to="/projects"
          className={
            "nav__link" + (path === "/projects" ? " nav__link--active" : "")
          }
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={
            "nav__link" + (path === "/contact" ? " nav__link--active" : "")
          }
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
