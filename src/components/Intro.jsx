import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  return (
    <section className="intro">
      <img src="logobeacon.png" alt="" className="intro__title" />
      <div className="intro__btn-container">
        <div class="intro__btn-event">
          <Link to="/event">Quests</Link>
        </div>
        <div class="intro__btn-play">
          <Link to="/weekly-dungeon">Weekly Dungeons</Link>
        </div>
      </div>
      <FontAwesomeIcon icon={faArrowDown} className="intro__arrow-icon" />
    </section>
  );
}

export default Intro;
