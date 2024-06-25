import { useState } from "react";
import SideBar from "../components/SideBar";
import { MainWrapper } from "../components/MainWrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isopen={isOpen} togglemenu={toggleMenu} />
      <MainWrapper $isopen={isOpen}>
        <Outlet />
      </MainWrapper>
    </>
  );
};

export default Layout;
