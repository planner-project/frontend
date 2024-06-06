import { styled } from 'styled-components';
import PlanItem from './PlanItem';
import { Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { ImgBtn, ButtonWrapper, BlueBtn } from './Button';
import { FormLine } from './FormLine';
import { StyledInput } from "../components/Form";
import { Typo } from './Typo';
import Modal from "react-modal";

const PlanBoxContainer = styled.div`
  width: 341px;
  min-height: 300px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0) 100%);
  border: 2px solid white;
  border-radius: 14px;
  border-image-slice: 1;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 14px;
`;

const Title = styled.div`
  width: 314px;
  height: 78px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border: 1px black dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`
const PlanAddBtn = styled.button`
    width: 314px;
  height: 78px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border: 1px black dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
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

const PlanBoxListItem = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [title, setTitle] = useState();
  const [time, setTime] = useState();
  const [content, setContent] = useState();
  const [address, setAdderess] = useState();

  const showModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  return(
    <PlanBoxContainer>
      <Title>2023년 02월 20일</Title>
        <PlanItem></PlanItem>
        <PlanItem></PlanItem>
        <PlanItem></PlanItem>
        <PlanItem></PlanItem>
      <PlanAddBtn onClick={showModal}>일정 추가</PlanAddBtn>
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
            일정 추가하기
          </Typo>
          <StyledInput
              placeholder="제목을 입력해주세요"
              $mt
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <StyledInput
              type='time'
              placeholder="시간을 입력해주세요"
              $mt
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          <StyledInput
              placeholder="내용을 입력해주세요"
              $mt
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <StyledInput
              placeholder="장소를 입력해주세요"
              $mt
              value={address}
              onChange={(e) => setAdderess(e.target.value)}
            />

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

export default PlanBoxListItem;