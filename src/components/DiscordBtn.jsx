import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

function DiscordBtn() {
  const hasScrolled = useScrollPosition(20);

  return (
    <>
      {hasScrolled && (
        <Link
          to="https://discord.gg/thebeacon"
          target="_blank"
          className="discord__btn-container"
        >
          <img src="/discord.svg" alt="" className="discord__btn" />
        </Link>
      )}
    </>
  );
}

export default DiscordBtn;
