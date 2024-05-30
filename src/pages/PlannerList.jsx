import Ad from "../components/Ad";
import { MainWrapper } from "../components/MainWrap";
import SideBar from "../components/SideBar";
import { BlueBtn, ButtonWrapper, ImgBtn } from "../components/Button";
import PlanListItem from "../components/PlanListItem";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Typo } from "../components/Typo";
import { FormLine } from "../components/FormLine";
import { StyledInput } from "../components/Form";
import useUserStore from "../store";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [plans, setPlans] = useState([]);
  const showModal = () => {
    setModalOpen(true);
  };
  function closeModal() {
    setModalOpen(false);
  }

  const token = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const { user } = useUserStore();
  const fetchPlans = async () => {
    if (!user || !user.userId) return;
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users/${user.userId}/planners`,
        config
      );
      setPlans(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPlans();
  }, [user]);
  const postPlanner = async () => {
    if (!user || !user.userId) return;
    const plan = {
      title,
      isPrivate,
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/users/${user.userId}/planners`,
        plan,
        config
      );
      console.log(response);
      setModalOpen(false);
      fetchPlans();
    } catch (error) {
      console.error(error);
    }
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
          {plans.map((plan) => (
            <PlanListItem
              key={plan.plannerId}
              plan={plan}
              fetchPlans={fetchPlans}
            />
          ))}
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
            <StyledInput
              placeholder="제목을 입력해주세요"
              $mt
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            <BlueBtn $margin="20px 0 0" onClick={postPlanner}>
              생성
            </BlueBtn>
          </ButtonWrapper>
        </Modal>
      </MainWrapper>
    </div>
  );
};

export default PlannerList;
