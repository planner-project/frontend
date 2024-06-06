import { styled } from 'styled-components';

const PlanBoxContainer = styled.div`
  width: 375px;
  min-height: 300px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0) 100%);
  border: 2px solid white;
  border-radius: 14px;
  border-image-slice: 1;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

const PlanBoxListItem = () => {
  return(
    <PlanBoxContainer>
      <Title>2023년 02월 20일</Title>
    </PlanBoxContainer>
  );
}

export default PlanBoxListItem;