import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Modal from 'react-modal';
import { ImgBtn, ButtonWrapper, BlueBtn } from './Button';
import { FormLine } from './FormLine';
import { StyledInput } from '../components/Form';

// 스타일 컴포넌트 정의
const PlanContainer = styled.div`
  width: 314px;
  height: 142px;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px black dashed;
  border-radius: 10px;
  margin-top: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  width: 219px;
  height: 24px;
  font-size: 24px;
  font-family: 'Pretendard', serif;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Address = styled.p`
  font-size: 18px;
  font-family: 'Pretendard', serif;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Typo = styled.p`
  font-size: 18px;
  font-family: 'Pretendard', serif;
  font-weight: 700;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '50px',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    minWidth: '500px',
    minHeight: '100px',
  },
  overlay: {
    zIndex: '10',
  },
};

const PlanItem = ({ plans, clients, plannerId, planBoxId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [planData, setPlanData] = useState(plans || {});
  const client = clients;

  useEffect(() => {
    setPlanData(plans);
  }, [plans]);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setModalOpen(false);
  };

  const deletePlan = () => {
    try {
      client.current.publish({
        destination: `/pub/planner/${plannerId}/planBox/${planBoxId}/delete/${planData.planId}`,
      });
      setModalOpen(false);
    } catch(error) {
      console.log(error);
    }
  }

  return planData && planData.title ? (
    <PlanContainer onClick={showModal}>
      <Title>{planData.title}</Title>
      <Address>
        {planData.address} {planData.time}
      </Address>
      <Typo>{planData.content}</Typo>
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
            일정 삭제하기
          </Typo>
        </FormLine>
        <ButtonWrapper>
          <BlueBtn $margin="200px 0 0" onClick={deletePlan}>
            삭제
          </BlueBtn>
        </ButtonWrapper>
      </Modal>
    </PlanContainer>
  ) : null;
};

export default PlanItem;
