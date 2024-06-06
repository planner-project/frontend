import { styled } from 'styled-components';
import { PlanBoxAddBtn, ImgBtn, ButtonWrapper, BlueBtn } from './Button';
import { FormLine } from './FormLine';
import { StyledInput, BirthWrap, StyledInputLike } from "../components/Form";
import { Typo } from './Typo';
import Modal from "react-modal";
import { useState } from 'react';
import {
  StyledCalendarWrapper,
  StyledCalendar,
} from "../components/Calendar.jsx";
import { DragDropContext } from 'react-beautiful-dnd';
import PlanBoxListItem from './PlanBoxListItem.jsx';

const PlanBoxContainer = styled.div`
  width: auto;
  height: auto;
  overflow-x: auto;
  display: flex;
  gap: 40px;
`;

const PlanBoxWrapper = styled.div`
  width: 317px;
  height: auto;
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
    minHeight: "500px",
  },
  overlay: {
    zIndex: "10",
  },
};

const PlanBox = ({clients, plannerId}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [date, setDate] = useState();
  const [planDate, setPlanDate] = useState();
  const [isShow, setIsShow] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const client = clients;

  const showModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const handleOnClick = () => {
    setIsShow(!isShow);
  };
  const handleOnChange = (value) => {
    setIsShow(!isShow);
    setIsSelect(true);

    const year = value.getFullYear();
    let month = value.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    month = month <= 9 ? "0" + String(month) : month;
    let day = value.getDate();
    day = day <= 9 ? "0" + String(day) : day;
    setPlanDate(`${year}-${month}-${day}`);
  };

  const onDragEnd = () => {console.log("g")};

  const addPlanBox = () => {
    try {
      const body = {
        planDate: planDate,
        isPrivate: isPrivate,
      };
      console.log(planDate)
      client.current.publish({
        destination: `/pub/planner/${plannerId}/create`,
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
      });
    } catch (error) {
      console.log(error);
    }
}
  return (
    <PlanBoxContainer>
      <DragDropContext onDragEnd={onDragEnd}>
      <PlanBoxListItem></PlanBoxListItem>
      <PlanBoxAddBtn onClick={showModal}><Typo>일정 박스 추가</Typo></PlanBoxAddBtn>
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
          <Typo $size="1.1rem" $weight="bold" $margin="0 0 10px 0">
            일정 박스 추가하기
          </Typo>
          <BirthWrap>
          <StyledInputLike name={"birthday"} onClick={handleOnClick} $mb>
            {isSelect ? "" : "일정 날짜"}
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
          <Typo $size="0.8rem" $margin="30px 0 0">
            공개여부
          </Typo>
          <StyledInput
            type="checkbox"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
            $mt
          />
        </FormLine>
        <ButtonWrapper>
            <BlueBtn $margin="200px 0 0" onClick={addPlanBox}>
              생성
            </BlueBtn>
          </ButtonWrapper>
      </Modal>
      </DragDropContext>
    </PlanBoxContainer>
  );
}

export default PlanBox;