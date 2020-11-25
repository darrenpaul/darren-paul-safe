import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="social__links">
        <a
          className="social__link"
          href="https://github.com/darrenpaul"
          target="_blank"
        >
          <FontAwesomeIcon className="header__user_icon" icon={faGithub} />
        </a>
        <a
          className="social__link"
          href="https://www.linkedin.com/in/darren-paul-16765ab2"
          target="_blank"
        >
          <FontAwesomeIcon className="header__user_icon" icon={faLinkedin} />
        </a>
        <a
          className="social__link"
          href="https://www.instagram.com/darrenrpaul/"
          target="_blank"
        >
          <FontAwesomeIcon className="header__user_icon" icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
