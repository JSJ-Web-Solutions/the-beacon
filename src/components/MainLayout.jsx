import { Outlet } from "react-router-dom";
import Header from "./Header";
import DiscordBtn from "./DiscordBtn";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <DiscordBtn />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
