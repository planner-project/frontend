import { styled } from 'styled-components';

const PlanContainer = styled.div`
  width: 314px;
  height: 142px;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px black dashed;
  border-radius: 10px;
  margin-top: 14px;
`;

const Title = styled.h1`
  width: 219px;
  height: 24px;
  font-size: 24px;
  font-family: 'Pretendard', serif;
  font-weight: bold;
`;


const Typo = styled.p`
  font-size: 16px;
  font-family: 'Pretendard', serif;
  font-weight: 700;
`

const PlanItem = ({plan}) => {
  console.log(plan);
  return(
    <PlanContainer>
    </PlanContainer>
  );
}

export default PlanItem;