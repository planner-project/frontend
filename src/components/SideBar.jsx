import { styled } from 'styled-components';
import SideBar_Account from './SideBar_Account';
import SideBar_Menu from './SideBar_Menu';

const Container = styled.div`
  width: 15vw;
  min-width: 200px;
  height: 100vh;
  padding: 20px;
  background-color: white;
  border: 1px #D0D5DD solid;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 76px;
  border-bottom: 1px #E0E0E0 solid;
`

const Logo = styled.div`
  width:80%;
  height: 47px;
  background-image: url('../../logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

function SideBar() {
  return (
    <Container>
      <LogoContainer>
        <Logo></Logo>
      </LogoContainer>
      <SideBar_Account></SideBar_Account>
      <SideBar_Menu></SideBar_Menu>
    </Container>
  );
}

export default SideBar;