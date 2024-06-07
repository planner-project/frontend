import { styled } from 'styled-components';
import { PlanBoxAddBtn, ImgBtn, ButtonWrapper, BlueBtn } from './Button';
import { FormLine } from './FormLine';
import { StyledInput, BirthWrap, StyledInputLike } from "../components/Form";
import { Typo } from './Typo';
import Modal from "react-modal";
import { useEffect, useState, useCallback } from 'react';
import {
  StyledCalendarWrapper,
  StyledCalendar,
} from "../components/Calendar.jsx";
import { DragDropContext } from 'react-beautiful-dnd';
import PlanBoxListItem from './PlanBoxListItem.jsx';
import useUserStore from '../store.jsx';
import axios from 'axios';

const PlanBoxContainer = styled.div`
  width: auto;
  height: auto;
  overflow-x: auto;
  display: flex;
  gap: 40px;
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

const PlanBoxItem = ({ clients, plannerId, data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [date, setDate] = useState();
  const [planDate, setPlanDate] = useState();
  const [isShow, setIsShow] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [plan, setPlan] = useState([]);
  const client = clients;
  const { user } = useUserStore();

  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleOnClick = () => {
    setIsShow(!isShow);
  };
  const handleOnChange = (value) => {
    setIsShow(!isShow);
    setIsSelect(true);

    const year = value.getFullYear();
    let month = value.getMonth() + 1;
    month = month <= 9 ? "0" + String(month) : month;
    let day = value.getDate();
    day = day <= 9 ? "0" + String(day) : day;
    setPlanDate(`${year}-${month}-${day}`);
  };

  const onDragEnd = () => { console.log("g") };

  const addPlanBox = async () => {
    try {
      const body = {
        planDate: planDate,
        isPrivate: isPrivate,
      };
      console.log(planDate);
      client.current.publish({
        destination: `/pub/planner/${plannerId}/create`,
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });

      // 새로운 계획 상자를 추가한 후 업데이트된 계획 데이터를 가져옵니다.
      await getPlan();
    } catch (error) {
      console.log(error);
    }
  };

  const getPlan = useCallback(async () => {
    const config = {
      headers: {
        Authorization: sessionStorage.getItem("Authorization"),
      }
    };
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users/${user.userId}/planners/${plannerId}`,
        config
      );
      setPlan(response.data.planBoxResponses);
      console.log(response.data.planBoxResponses);
    } catch (error) {
      console.log(error);
    }
  }, [plannerId, user.userId]);

  useEffect(() => {
    getPlan();
  }, []);
  
  useEffect(() => {
    if (data) {
      // 여기서 data의 값이 유효한지 확인합니다.
      console.log(data); // data의 값을 확인하기 위한 로그
      setPlan(data); // plan 상태를 업데이트합니다.
    }
  }, [data]);
  
  useEffect(() => {
    // 업데이트된 plan 값을 확인합니다.
    console.log(plan);
    setPlan(plan)
  }, [plan]);
  return (
    <PlanBoxContainer>
      <DragDropContext onDragEnd={onDragEnd}>
      {plan && plan.map((el) => (
        console.log(plan),
        <PlanBoxListItem
          key={el.planBoxId} // 고유한 key 설정
          planBox={el}
          clients={client}
          plannerId={plannerId}
        />
      ))}
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
};

export default PlanBoxItem;





