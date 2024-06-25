import PropTypes from "prop-types";
import { styled } from "styled-components";
import SideBar_Account from "./SideBar_Account";
import SideBar_Menu from "./SideBar_Menu";

const Container = styled.div`
  position: fixed;
  width: 15vw;
  width: 340px;
  height: 100vh;
  padding: 20px;
  background-color: white;
  border: 1px #d0d5dd solid;
  display: flex;
  flex-direction: column;
  position: fixed;
  transition: 0.5s ease;
  left: ${(props) => (props.$isopen ? "0" : "-310px")};
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 76px;
  border-bottom: 1px #e0e0e0 solid;
`;

const Logo = styled.div`
  width: 80%;
  height: 47px;
  background-image: url("../../logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  top: 30px;
  right: -20px;
  transition: transform 0.6s ease;
  transform: ${(props) => (props.$isopen ? "rotate(0deg)" : "rotate(180deg)")};
  img {
    width: 28px;
  }
`;

function SideBar({ isopen, togglemenu }) {
  return (
    <Container $isopen={isopen}>
      <LogoContainer>
        <Logo></Logo>
      </LogoContainer>
      <SideBar_Account></SideBar_Account>
      <SideBar_Menu></SideBar_Menu>
      <ToggleBtn $isopen={isopen} onClick={togglemenu}>
        <img src="images/left.png" alt="navButton" />
      </ToggleBtn>
    </Container>
  );
}

SideBar.propTypes = {
  isopen: PropTypes.bool.isRequired,
  togglemenu: PropTypes.func.isRequired,
};

export default SideBar;
