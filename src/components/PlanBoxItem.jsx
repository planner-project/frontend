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

const PlanBoxContainer = styled.div`
  width: auto;
  height: auto;
  overflow-x: auto;
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

const PlanBox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [date, setDate] = useState();
  const [isShow, setIsShow] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

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
    const month = value.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    const day = value.getDate();
    
    console.log(year, month, day);
  };

  return (
    <PlanBoxContainer>
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
            <BlueBtn $margin="200px 0 0">
              생성
            </BlueBtn>
          </ButtonWrapper>
      </Modal>
    </PlanBoxContainer>
  );
}

export default PlanBox;