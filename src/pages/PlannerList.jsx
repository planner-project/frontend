import Ad from "../components/Ad";
import { MainWrapper } from "../components/MainWrap";
import SideBar from "../components/SideBar";
import { BlueBtn, ButtonWrapper, ImgBtn } from "../components/Button";
import PlanListItem from "../components/PlanListItem";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Typo } from "../components/Typo";
import { FormLine } from "../components/FormLine";
import { BirthWrap, StyledInput, StyledInputLike } from "../components/Form";
import { StyledCalendar, StyledCalendarWrapper } from "../components/Calendar";

const PlanListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "50px",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
    minWidth: "500px",
    // minHeight: "650px",
  },
  overlay: {
    zIndex: "10",
  },
};
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
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  function closeModal() {
    setModalOpen(false);
  }

  const [isShow, setIsShow] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [date, setDate] = useState();
  const handleOnClick = () => {
    setIsShow(!isShow);
  };
  const handleOnChange = (value) => {
    setIsShow(!isShow);
    setIsSelect(true);

    const year = value.getFullYear();
    const month = value.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    const day = value.getDate();

    // setUserData((prevUserData) => ({
    //   ...prevUserData,
    //   birthday: [year, month, day],
    // }));
  };
  return (
    <div>
      <SideBar />
      <MainWrapper>
        <Ad />
        <ButtonWrapper>
          <BlueBtn $margin="30px 0" onClick={showModal}>
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
        <Modal
          isOpen={modalOpen}
          style={customStyles}
          ariaHideApp={false}
          onRequestClose={closeModal}
        >
          <ImgBtn onClick={closeModal}>
            <img src="images/close.png" alt="close" />
          </ImgBtn>
          <FormLine>
            <Typo $size="1.1rem" $weight="bold">
              플랜생성하기
            </Typo>
            <StyledInput placeholder="제목을 입력해주세요" mt />
          </FormLine>

          <BirthWrap>
            <StyledInputLike name={"birthday"} onClick={handleOnClick} mt>
              {isSelect ? "" : "생년월일 8자리"}
              {date ? date.toLocaleDateString() : ""}
              <img src="images/calendar.png" />
            </StyledInputLike>

            {isShow && (
              <StyledCalendarWrapper>
                <StyledCalendar
                  onClickDay={handleOnChange}
                  onChange={setDate}
                  value={date}
                />
              </StyledCalendarWrapper>
            )}
          </BirthWrap>
          <ButtonWrapper>
            <BlueBtn $margin="20px 0 0">생성</BlueBtn>
          </ButtonWrapper>
        </Modal>
      </MainWrapper>
    </div>
  );
};

export default PlannerList;
