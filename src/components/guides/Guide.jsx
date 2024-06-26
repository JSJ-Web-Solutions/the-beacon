import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

function Guides() {
  return (
    <section className="guides">
      <div className="section-title">
        <h1>Guides</h1>
      </div>
      <div className="guides__link-container">
        <Link to="/guides/1" className="guides__link">
          What is The Beacon?{" "}
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
        <Link to="/guides/2" className="guides__link">
          What do I need to play ?{" "}
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
        <Link to="/guides/3" className="guides__link">
          Game Characters{" "}
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
        <Link to="/guides/4" className="guides__link">
          Items{" "}
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
        <Link to="/guides/5" className="guides__link">
          Pets{" "}
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
        <Link to="/guides/6" className="guides__link">
          Player Customization{" "}
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
        <Link to="/guides/7" className="guides__link">
          House Customization{" "}
          <FontAwesomeIcon icon={faRightLong} className="guides__link-icon" />
        </Link>
      </div>
    </section>
  );
}

export default Guides;
