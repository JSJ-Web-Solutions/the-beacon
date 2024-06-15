import { NavLink, Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

function Header() {
  const hasScrolled = useScrollPosition(20);

  return (
    <>
      {/* {hasScrolled && ( */}
      <header
        className={`header ${hasScrolled ? "header__bg" : ""}`}
        id="header"
      >
        <Link to="/" className="header__logo-container">
          <img src="/header-logo.png" alt="" className="header__logo" />
        </Link>
        <NavLink
          to="/event"
          className="header__link"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "rgba(255, 255, 255, 0.25)" : "",
              borderRadius: isActive ? "4px" : "",
            };
          }}
        >
          Event
        </NavLink>
        <NavLink
          to="/guides"
          className="header__link"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "rgba(255, 255, 255, 0.25)" : "",
              borderRadius: isActive ? "4px" : "",
            };
          }}
        >
          Guides
        </NavLink>
        <NavLink
          to="/faq"
          className="header__link"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "rgba(255, 255, 255, 0.25)" : "",
              borderRadius: isActive ? "4px" : "",
            };
          }}
        >
          FAQ
        </NavLink>
        <NavLink
          to="https://app.treasure.lol/games/the-beacon?tab=collections"
          target="_blank"
          className="header__link"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "rgba(255, 255, 255, 0.25)" : "",
              borderRadius: isActive ? "4px" : "",
            };
          }}
        >
          Marketplace
        </NavLink>
        <div class="header__link header__link-play">
          <Link to="/">Play</Link>
        </div>
      </header>
      {/* )} */}
    </>
  );
}

export default Header;
