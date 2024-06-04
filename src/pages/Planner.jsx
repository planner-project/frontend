import SideBar from "../components/SideBar";
import GroupMember from "../components/GroupMember";
import { MainWrapper } from "../components/MainWrap";
import { useLocation } from "react-router-dom";

const Planner = () => {
  const location = useLocation();
  const plannerId = location.state.plannerId;
  console.log(plannerId);
  return (
    <>
      <SideBar></SideBar>
      <MainWrapper>
      <GroupMember></GroupMember>
      </MainWrapper>
    </>
  )
}

export default Planner;