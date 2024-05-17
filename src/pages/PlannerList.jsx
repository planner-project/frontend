import Ad from "../components/Ad";
import { MainWrapper } from "../components/MainWrap";
import SideBar from "../components/SideBar";
import { BlueBtn, ButtonWrapper } from "../components/Button";
import PlanListItem from "../components/PlanListItem";
import styled from "styled-components";

const PlanListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const PlannerList = () => {
  return (
    <div>
      <SideBar />
      <MainWrapper>
        <Ad />
        <ButtonWrapper>
          <BlueBtn $margin="30px 0">플랜 추가하기</BlueBtn>
        </ButtonWrapper>
        <PlanListWrap>
          <PlanListItem />

          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
        </PlanListWrap>
      </MainWrapper>
    </div>
  );
};

export default PlannerList;
