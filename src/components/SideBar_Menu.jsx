import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 19px;
  width: 100%;
  height: 317px;
`;

const MenuContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 52px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 28px;
`;

const MenuName = styled.p`
  font-family: "Pretendard", serif;
  font-weight: bold;
  margin-left: 25px;
`;

const Title = styled.p`
  margin-bottom: 20px;
  width: 100%;
  height: 11px;
  text-align: left;
  font-size: 10px;
  font-family: "Pretendard", serif;
  color: #878787;
`;

function SideBar_Menu() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Menu</Title>
      <MenuContainer onClick={() => navigate("/dashboard")}>
        <Icon src={"../../public/dashboard.png"}></Icon>
        <MenuName>대시보드</MenuName>
      </MenuContainer>
      <MenuContainer onClick={() => navigate("/user_profile")}>
        <Icon src={"../../public/user.png"}></Icon>
        <MenuName>프로필</MenuName>
      </MenuContainer>
      <MenuContainer onClick={() => navigate("/p_list")}>
        <Icon src={"../../public/planner.png"}></Icon>
        <MenuName>플래너</MenuName>
      </MenuContainer>
      <MenuContainer>
        <Icon src={"../../public/gallery.png"}></Icon>
        <MenuName>게시판</MenuName>
      </MenuContainer>
    </Wrapper>
  );
}

export default SideBar_Menu;
