import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

// import resume from '../../assets/resume.pdf';

import "./Header.css";

library.add(faLinkedin, faSquareGithub);

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logo__text">
          VM
        </Link>
      </div>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/viktorija-martinaityte-softdev/"
          className="socials__link"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="socials__icon"
          />
        </a>
        <a
          href="https://github.com/ViktorijaMart"
          className="socials__link"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "square-github"]}
            className="socials__icon"
          />
        </a>
        <a
          href={require("../../assets/resume.pdf")}
          className="socials__link"
          target="_blank"
        >
          <div className="socials__link--custom">Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Header;
