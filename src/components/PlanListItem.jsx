import styled from "styled-components";
import { Typo } from "./Typo";
import { ButtonWrapper, BlackBtn } from "./Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

const PlanListItem = ({ plan }) => {
  const { title, startDate, endDate } = plan;
  const deleteHandler = () => {
    MySwal.fire({
      text: "정말 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "네",
      cancelButtonText: "아니요!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Item deleted");
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
