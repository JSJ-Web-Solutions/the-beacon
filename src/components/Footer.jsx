import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="footer">
      <div>
        <img src="/title.png" alt="" className="footer__title" />
      </div>
      <div className="footer__icons-container">
        <Link to="https://x.com/The_Beacon_GG">
          <FontAwesomeIcon icon={faTwitter} className="footer__icons" />
        </Link>
        <Link to="https://t.co/aSZUYPFi76">
          <FontAwesomeIcon icon={faDiscord} className="footer__icons" />
        </Link>
      </div>
    </section>
  );
}

export default Footer;
