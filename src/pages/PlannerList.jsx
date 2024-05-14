import Ad from "../components/Ad";
import { MainWrapper } from "../components/MainWrap";
import SideBar from "../components/SideBar";
const PlannerList = () => {
  return (
    <div>
      <SideBar />
      <MainWrapper>
        <Ad />
      </MainWrapper>
    </div>
  );
};

export default PlannerList;
