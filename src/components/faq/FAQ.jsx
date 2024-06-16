import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

function FAQ() {
  return (
    <section className="faq">
      <div className="section-title">
        <h1>FAQ</h1>
      </div>
      <div className="faq__link-container">
        <Link to="/faq/1" className="faq__link">
          Can I play the game?
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
        <Link to="/faq/2" className="faq__link">
          Whats coming next?
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
      </div>
    </section>
  );
}

export default FAQ;
