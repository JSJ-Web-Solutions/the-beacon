import QuestModal from "../components/QuestModal";
import Icon from "../assets/checkpoint-icon-large.png";
import MiniIcon from "../assets/checkpoint-icon-sm-2.png";
import MiniIconDark from "../assets/checkpoint-icon-sm-1.png";
import MiniIconBlue from "../assets/chechpoint-icon-sm-3.png";
import data from "../assets/questItems.json";

const iconComponents = {
  Icon: Icon,
  MiniIcon: MiniIcon,
  MiniIconDark: MiniIconDark,
  MiniIconBlue: MiniIconBlue,
};

function Event() {
  return (
    <section className="event">
      <div>
        <div className="event-map_main-container">
          <div className="event-map_top-container">
            {data.itemsTop.map((item, index) => {
              return (
                <div className={item.className}>
                  <QuestModal
                    size={item.size}
                    icon={iconComponents[item.icon]}
                    title={item.title}
                    text={item.text}
                    video={item.video}
                    active={item.active}
                  />
                </div>
              );
            })}
          </div>

          <div className="event-map_right-line"></div>
          <div className="event-map_left-line"></div>

          <div className="event-map_center-line">
            <div className="event-map_center-line--rectangle event-map_center-line--rectangle_circle"></div>
            {data.itemsCenter.map((item, index) => {
              return (
                <div className={item.className}>
                  <QuestModal
                    size={item.size}
                    icon={iconComponents[item.icon]}
                    title={item.title}
                    text={item.text}
                    video={item.video}
                    active={item.active}
                  />
                </div>
              );
            })}
          </div>

          <div className="event-map_bottom-container">
            {data.itemsBottom.map((item, index) => {
              return (
                <div className={item.className}>
                  <QuestModal
                    size={item.size}
                    icon={iconComponents[item.icon]}
                    title={item.title}
                    text={item.text}
                    video={item.video}
                    active={item.active}
                    tips={item.tips}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="event__warning">
        <img src={MiniIconBlue} alt="icon" className="event__warning-img" />
        <p>Only this ones have tutorial.</p>
      </div>
    </section>
  );
}

export default Event;
