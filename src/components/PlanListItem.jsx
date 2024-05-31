import styled from "styled-components";
import { Typo } from "./Typo";
import { ButtonWrapper, BlackBtn } from "./Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import useUserStore from "../store";

const MySwal = withReactContent(Swal);

const PlanBox = styled.div`
  min-width: 300px;
  height: 200px;
  color: #fff;
  background: url("images/planner-test.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  &:hover ${ButtonWrapper} {
    display: flex;
  }
`;

const BlackScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Inner = styled.div`
  padding: 0 20px 0;
  width: 100%;
  position: absolute;
  bottom: 20px;
  /* left: 20px; */
`;

const GroupList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ListItem = styled.li`
  width: 30px;
  height: 30px;
  background-image: url("images/ragdoll.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border-radius: 20px;
`;

// eslint-disable-next-line react/prop-types
const PlanListItem = ({ plan, fetchPlans }) => {
  // eslint-disable-next-line react/prop-types
  const { title, startDate, endDate, plannerId } = plan;
  const { user } = useUserStore();
  const token = sessionStorage.getItem("Authorization");
  const config = {
    headers: {
      Authorization: token,
    },
    data: {
      userId: user.userId,
    },
  };

  const deleteHandler = () => {
    MySwal.fire({
      text: "정말 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "네",
      cancelButtonText: "아니요!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://localhost:8080/api/v1/users/${user.userId}/planners/${plannerId}`,
            config
          );
          console.log("Item deleted");
          fetchPlans();
        } catch (error) {
          console.error("Failed to delete item:", error);
        }
      }
    });
  };

  return (
    <PlanBox>
      <BlackScreen>
        <ButtonWrapper $gap="5px" $margin="10px 20px 0 0" $display="none">
          <BlackBtn onClick={deleteHandler}>삭제</BlackBtn>
        </ButtonWrapper>
        <Inner>
          {startDate && (
            <Typo $color="#fff" $size="0.9rem">
              {new Date(startDate).toLocaleDateString()} -{" "}
              {new Date(endDate).toLocaleDateString()}
            </Typo>
          )}
          <Typo $color="#fff" $weight="bold" $size="1.2rem" $margin="10px 0 0">
            {title}
          </Typo>

          <GroupList>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </GroupList>
        </Inner>
      </BlackScreen>
    </PlanBox>
  );
};

export default PlanListItem;
