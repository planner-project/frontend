import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import PlanItem from './PlanItem';
import Modal from 'react-modal';
import { ImgBtn, ButtonWrapper, BlueBtn } from './Button';
import { FormLine } from './FormLine';
import { StyledInput } from '../components/Form';
import { Typo } from './Typo';

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
`;
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
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '50px',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    minWidth: '500px',
    minHeight: '500px',
  },
  overlay: {
    zIndex: '10',
  },
};

const PlanBoxListItem = ({ planBox, clients, plannerId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [titleModalOpen, setTitleModalOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [content, setContent] = useState('');
  const [address, setAddress] = useState('');
  const [planBoxData, setPlanBoxData] = useState(planBox || {});
  const [isShow, setIsShow] = useState(false);
  const client = clients;

  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const showTitleModal = () => {
    setTitleModalOpen(true);
  };
  const closeTitleModal = () => {
    setTitleModalOpen(false);
  };

  const deletePlanner = () => {
    try {
      client.current.publish({
        destination: `/pub/planner/${plannerId}/delete/${planBoxData.planBoxId}`,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createPlan = () => {
    try {
      const body = {
        isPrivate,
        title,
        time,
        content,
        address,
      };
      client.current.publish({
        destination: `/pub/planner/${plannerId}/planBox/${planBoxData.planBoxId}/create`,
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPlanBoxData(planBox);
  }, [planBox]);

  return (
    <PlanBoxContainer>
      <Title onClick={showTitleModal}>{planBoxData.planDate}</Title>
      <Modal
        isOpen={titleModalOpen}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={closeTitleModal}
      >
        <ImgBtn onClick={closeTitleModal}>
          <img src="images/close.png" alt="close" />
        </ImgBtn>
        <FormLine>
          <Typo $size="1.1rem" $weight="bold" $margin="0 0 10px 0">
            일정 수정, 삭제하기
          </Typo>
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
          <BlueBtn $margin="200px 0 0" onClick={deletePlanner}>
            삭제
          </BlueBtn>
        </ButtonWrapper>
      </Modal>
      {planBoxData.planResponses &&
        planBoxData.planResponses.map((el) => (
          el && el.title !== undefined && (
            <PlanItem 
            key={el.planId} 
            planBoxId={planBoxData.planBoxId}
            plans={el} 
            clients={client}
            plannerId={plannerId}/>
          )
        ))}
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
            type="time"
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
            onChange={(e) => setAddress(e.target.value)}
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
          <BlueBtn $margin="200px 0 0" onClick={createPlan}>
            생성
          </BlueBtn>
        </ButtonWrapper>
      </Modal>
    </PlanBoxContainer>
  );
};

export default PlanBoxListItem;
