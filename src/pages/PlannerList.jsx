import Ad from "../components/Ad";
import { MainWrapper } from "../components/MainWrap";
import SideBar from "../components/SideBar";
import { BlueBtn, ButtonWrapper } from "../components/Button";
import PlanListItem from "../components/PlanListItem";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const PlanListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const PlannerList = () => {
  const [plan, setPlanner] = useState({
    title: "플래너 제목",
    isPrivate: true,
  });

  const postPlanner = async () => {
    try {
      console.log("click");
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/1/planners",
        plan
      );
      console.log("Response:", response);
      // handle response, update state, etc.
    } catch (error) {
      console.error("There was an error!", error);
      // handle error
    }
  };

  return (
    <div>
      <SideBar />
      <MainWrapper>
        <Ad />
        <ButtonWrapper>
          <BlueBtn $margin="30px 0" onClick={postPlanner}>
            플랜 추가하기
          </BlueBtn>
        </ButtonWrapper>
        <PlanListWrap>
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
